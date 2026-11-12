import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 100, suffix: '%', label: 'User Control' },
  { value: 24, suffix: '/7', label: 'SLA Tracking' },
  { value: 96, suffix: '%', label: 'RAG-Powered Accuracy' },
  { value: 2, suffix: 'x', label: 'NCH & e-Jagriti Ready' },
];

export function StatsStrip() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-border bg-surface/80 py-8">
      <div className="section-shell grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="border-l border-border pl-5 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-5">
            <div className="mono-label mb-2 text-muted">0{index + 1}</div>
            <div className="font-mono text-3xl text-text md:text-4xl">
              {visible ? (
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </div>
            <div className="mt-2 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
}
