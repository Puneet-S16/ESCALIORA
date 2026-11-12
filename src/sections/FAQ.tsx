import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, FolderOpen, MessageCircleMore, PackageCheck, ShieldCheck, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiles = [
  { label: 'Invoices', icon: FileText },
  { label: 'Chat Logs', icon: MessageCircleMore },
  { label: 'Delivery Records', icon: PackageCheck },
  { label: 'Warranty Cards', icon: ShieldCheck },
  { label: 'Order Screenshots', icon: ShoppingBag },
  { label: 'Policy Notices', icon: FolderOpen },
];

export function EvidenceSupported() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sectionRef.current || isReduced) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.evidence-tile').forEach((tile, index) => {
        const offset = index % 2 === 0 ? -18 : 18;
        gsap.to(tile, {
          y: offset,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40">
      <div className="section-shell">
        <div className="mb-12 max-w-lg">
          <div className="mono-label mb-4 text-accent">Evidence supported</div>
          <h2 className="h2-display text-text">Your complaint should be backed by everything the seller sent.</h2>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <div key={tile.label} className="evidence-tile mb-6 break-inside-avoid overflow-hidden rounded-card border border-border bg-surface p-5 shadow-soft">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-button border border-border bg-background text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="mono-label text-muted">0{index + 1}</span>
                </div>
                <div className="rounded-[10px] border border-border bg-background p-4">
                  <div className="mb-3 h-2 w-[55%] rounded-full bg-border" />
                  <div className="mb-2 h-2 w-[80%] rounded-full bg-border" />
                  <div className="h-2 w-[70%] rounded-full bg-accent/20" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-text">{tile.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
