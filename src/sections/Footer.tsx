import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.12, y: y * 0.12 });
  };

  return (
    <section id="cta" className="py-32 md:py-40">
      <div className="bg-accent px-6 py-14 md:px-12 md:py-20">
        <div className="section-shell rounded-card border border-white/20 bg-accent p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mono-label mb-4 text-white/85">Ready to act</div>
              <h2 className="h2-display text-white">Your resolution is closer than you think.</h2>
            </div>
            <a
              href="#top"
              onMouseMove={handleMove}
              onMouseLeave={() => setOffset({ x: 0, y: 0 })}
              className="button-surface inline-flex items-center justify-center rounded-button border border-white/20 bg-white px-6 py-4 text-sm font-medium text-accent transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
              Build your case
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
