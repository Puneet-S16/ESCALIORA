import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Submit initial details',
    text: 'Share the seller, product, timing, and the issue in a short intake form that keeps the complaint focused.',
  },
  {
    title: 'Upload supporting documents',
    text: 'Attach transactions, order records, screenshots, and written communication as one evidence bundle.',
  },
  {
    title: 'Let AI track the deadlines',
    text: 'The system highlights response windows, unresolved actions, and the next formal step before the date passes.',
  },
  {
    title: 'Review and export your grounded draft',
    text: 'Check the summary, confirm the facts, and export a legal draft that matches your evidence chain.',
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const items = gsap.utils.toArray<HTMLElement>('.how-step');
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 55%',
            scrub: false,
          },
        },
      );
    });

    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="compliance" className="py-32 md:py-40">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="mono-label mb-4 text-accent">How it works</div>
          <h2 className="h2-display max-w-md text-text">Clear steps. Controlled evidence. Better review.</h2>
        </div>

        <div className="relative pl-0 md:pl-10">
          <div ref={lineRef} className="absolute left-[18px] top-0 h-full w-px origin-top scale-y-0 bg-accent md:left-[26px]" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="how-step relative pl-12 md:pl-16">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-accent text-sm font-medium text-white">
                  {index + 1}
                </div>
                <div className="rounded-card border border-border bg-surface p-6 shadow-soft">
                  <div className="mono-label mb-3 text-accent">Step {index + 1}</div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] text-text">{step.title}</h3>
                  <p className="text-base text-muted">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
