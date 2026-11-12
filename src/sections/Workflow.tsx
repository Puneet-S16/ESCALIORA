import { ArrowUpRight, FileSearch, GanttChartSquare, Landmark, ShieldCheck, TimerReset } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Card } from '../components/Card';

const features = [
  {
    title: 'AI Fact Extraction',
    text: 'OCR and document parsing turn receipts, emails, and screenshots into structured evidence trails.',
    icon: FileSearch,
    size: 'large',
  },
  {
    title: 'SLA Deadline Monitoring',
    text: 'Track response windows before they slip and keep every escalation on schedule.',
    icon: TimerReset,
    size: 'small',
  },
  {
    title: 'RAG-grounded Legal Drafting',
    text: 'Base each draft on the evidence you uploaded and the consumer procedures that apply.',
    icon: Landmark,
    size: 'small',
  },
  {
    title: 'Secure Evidence Indexing',
    text: 'Keep sensitive files grouped, dated, and protected in one secure workspace.',
    icon: ShieldCheck,
    size: 'small',
  },
  {
    title: 'NCH & e-Jagriti Handoff',
    text: 'Prepare a complaint package that is ready for formal submission or review.',
    icon: GanttChartSquare,
    size: 'small',
  },
];

export function WhyEscaliora() {
  return (
    <section id="features" className="py-32 md:py-40">
      <div className="section-shell">
        <div className="mb-12 max-w-xl">
          <div className="mono-label mb-4 text-accent">Why ESCALIORA</div>
          <h2 className="h2-display text-text">A structured path from frustration to formal review.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[number]; index: number }) {
  const Icon = feature.icon;
  const [style, setStyle] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const colSpan = feature.size === 'large' ? 'lg:col-span-7' : 'lg:col-span-5';
  const rowClass = feature.size === 'large' ? 'lg:row-span-2' : '';

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;

    setStyle({
      x: (px * 8).toFixed(2) as unknown as number,
      y: (py * 8).toFixed(2) as unknown as number,
      rotateX: (py * -6).toFixed(2) as unknown as number,
      rotateY: (px * 6).toFixed(2) as unknown as number,
    });
  };

  const resetStyle = () => setStyle({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  return (
    <div className={`${colSpan} ${rowClass}`}>
      <Card
        data-cursor-view
        onMouseMove={handleMove}
        onMouseLeave={resetStyle}
        className={`card-tilt relative flex min-h-[204px] overflow-hidden p-6 ${
          feature.size === 'large' ? 'h-full min-h-[420px]' : 'min-h-[220px]'
        }`}
        style={{
          transform: `perspective(1200px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg) translateY(${style.y * 0.15}px)`,
          boxShadow: style.x || style.y ? '0 26px 70px rgba(15,23,42,0.1)' : undefined,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: style.x || style.y ? 1 : 0,
            background: 'rgba(37, 99, 235, 0.06)',
            transform: `translate(${style.x * 0.3}px, ${style.y * 0.3}px)`,
          }}
        />

        {feature.size === 'large' ? (
          <div className="relative z-10 flex h-full w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-button border border-border bg-background text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <span className="mono-label text-muted">Case trace</span>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="h3-display text-text">AI fact extraction keeps every claim grounded in evidence.</h3>
              <p className="max-w-md text-base text-muted">
                Process receipts, screenshots, chat logs, and notices into a cleaner audit trail before you draft a complaint.
              </p>
            </div>

            <div className="mt-8 rounded-card border border-border bg-background p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="mono-label text-muted">Document flow</div>
                <div className="mono-label text-secondary">Indexed</div>
              </div>
              <div className="space-y-3">
                {['Refund note', 'Order email', 'Delivery slip'].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <div className="h-2 rounded-full bg-border" style={{ width: `${70 + i * 12}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex h-full w-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-button border border-border bg-background text-accent">
                <Icon className="h-4 w-4" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-[-0.04em] text-text">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.text}</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
