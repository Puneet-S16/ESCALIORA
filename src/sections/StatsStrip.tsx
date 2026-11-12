import { motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const wordList = ['Your', 'evidence,', 'organized.', 'Your', 'grievance,', 'escalated.'];

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!wrapperRef.current || reducedMotion) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.hero-layer').forEach((layer, index) => {
        const offset = index === 0 ? 50 : index === 1 ? 90 : index === 2 ? 140 : 190;
        gsap.to(layer, {
          y: `-${offset}`,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    }, wrapperRef);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section id="top" ref={wrapperRef} className="relative min-h-[100vh] overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="section-shell relative mx-auto grid min-h-[calc(100vh-8rem)] items-center gap-10 pb-10 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 max-w-[680px]">
          <div className="mono-label mb-6 text-accent">AI-powered grievance workspace</div>
          <h1 className="h1-display mb-6 text-text">
            {wordList.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="copy-body max-w-[560px] text-muted">
            An AI-powered workspace that turns scattered emails and receipts into a legally grounded,
            submission-ready consumer complaint.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#cta" className="button-surface inline-flex items-center justify-center gap-2 rounded-button border border-accent bg-accent px-5 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Build your case
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#workflow" className="text-link text-sm font-medium text-text">
              See how it works <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full md:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-[24px] border border-border bg-surface/80 shadow-soft" />
          <div className="hero-layer absolute left-[8%] top-[12%] h-[66%] w-[74%] rounded-card border border-border bg-surface p-4 shadow-soft">
            <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-muted">
              <span>Case files</span>
              <span>02:14 PM</span>
            </div>
            <div className="space-y-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="rounded-[10px] border border-border bg-background p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span className="text-[10px] uppercase tracking-[0.12em] text-muted">Evidence {item + 1}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-10 rounded-[8px] bg-surface" />
                    <div className="h-10 rounded-[8px] border border-dashed border-border" />
                    <div className="h-10 rounded-[8px] bg-surface" />
                    <div className="h-10 rounded-[8px] border border-border bg-accent/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-layer absolute left-[18%] top-[24%] h-[62%] w-[68%] rounded-card border border-border bg-background p-4 shadow-soft">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <div className="h-2.5 w-2.5 rounded-full bg-text/20" />
            </div>
            <div className="space-y-3 text-sm text-muted">
              <div className="rounded-[10px] border border-border bg-surface p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-text">Complaint timeline</span>
                  <span className="mono-label text-accent">08 days</span>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-2 w-full rounded-full bg-border" />
                  <div className="h-2 w-[78%] rounded-full bg-accent" />
                  <div className="h-2 w-[60%] rounded-full bg-secondary" />
                </div>
              </div>
              <div className="rounded-[10px] border border-border bg-surface p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-text">Evidence chain</span>
                  <span className="mono-label text-secondary">Verified</span>
                </div>
                <div className="flex items-end gap-2">
                  {[32, 56, 74, 88].map((height) => (
                    <div key={height} className="w-1/4 rounded-t-[8px] bg-accent/15" style={{ height: `${height}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-layer absolute left-[24%] top-[30%] h-[52%] w-[58%] rounded-card border border-border bg-surface shadow-soft">
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="font-medium text-text">Consumer case</div>
                <span className="mono-label text-accent">SLA 14d</span>
              </div>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 rounded-[10px] border border-border bg-background p-3">
                  <Circle className="h-4 w-4 text-secondary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text">Refund dispute</div>
                    <div className="text-xs text-muted">Order #1349</div>
                  </div>
                </div>
                <div className="rounded-[10px] border border-border bg-background p-3 text-sm text-muted">
                  <div className="mb-2 flex items-center justify-between">
                    <span>AI draft status</span>
                    <span className="mono-label text-secondary">Ready</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div className="h-2 w-[78%] rounded-full bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-layer absolute right-[3%] top-[18%] h-[42%] w-[38%] rounded-card border border-accent/20 bg-accent/5 p-4 shadow-soft">
            <div className="mono-label mb-2 text-accent">Checklist</div>
            <div className="space-y-3 text-sm text-muted">
              {['Invoice', 'Email trail', 'Delivery log', 'Chat record'].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-[8px] border border-accent/10 bg-surface p-2.5">
                  <span>{item}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${index < 3 ? 'bg-secondary' : 'bg-border'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="mb-2 block">Scroll</span>
        <span className="mx-auto block h-px w-20 bg-border" />
      </div>
    </section>
  );
}
