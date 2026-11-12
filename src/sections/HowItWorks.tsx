import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, Inbox, MessageSquareText, ShieldCheck, TimerReset } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { title: 'Register Complaint', text: 'Capture the issue, the seller, and the impact in a structured intake form.', icon: FileText },
  { title: 'Upload Evidence', text: 'Attach receipts, screenshots, and email trails in a single organized case file.', icon: Inbox },
  { title: 'AI Extraction & Classification', text: 'Identify relevant facts, timelines, and claims before drafting begins.', icon: MessageSquareText },
  { title: 'SLA Tracking', text: 'Monitor the time window and keep the next action visible to every stakeholder.', icon: TimerReset },
  { title: 'Formal Package Generation', text: 'Prepare a compliant complaint packet ready for NCH or e-Jagriti submission.', icon: ShieldCheck },
];

export function Workflow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || reducedMotion) return;

    const context = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2200',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section id="workflow" ref={sectionRef} className="relative overflow-hidden py-32 md:py-40">
      <div className="section-shell">
        <div className="mb-10 max-w-xl">
          <div className="mono-label mb-4 text-accent">Workflow</div>
          <h2 className="h2-display text-text">From a single complaint to a filed case package.</h2>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative h-[70vh] overflow-hidden">
          <div ref={trackRef} className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-6 px-6 md:px-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title} className="workflow-card w-[320px] rounded-card border border-border bg-surface p-5 shadow-soft md:w-[360px]" data-cursor-view>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-button border border-border bg-background text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mono-label text-muted">0{index + 1}</div>
                  </div>
                  <div className="mb-4 flex items-center justify-between text-sm text-muted">
                    <span>Stage</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-text">{stage.title}</h3>
                  <p className="text-base text-muted">{stage.text}</p>
                  <div className="mt-6 overflow-hidden rounded-[12px] border border-border bg-background p-3">
                    <div className="mb-3 h-2 w-full rounded-full bg-border">
                      <div className="h-2 rounded-full bg-accent" style={{ width: `${60 + index * 7}%` }} />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((bar) => (
                        <div key={bar} className="h-16 rounded-[8px] border border-border bg-surface" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.title} className="w-[84vw] shrink-0 snap-center rounded-card border border-border bg-surface p-5 shadow-soft">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-button border border-border bg-background text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mono-label text-muted">0{index + 1}</div>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-text">{stage.title}</h3>
                <p className="text-base text-muted">{stage.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
