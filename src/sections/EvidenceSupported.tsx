const cases = [
  {
    title: 'E-commerce refund failure',
    description: 'Evidence usually includes order confirmations, refund responses, payment proofs, and chat logs with the retailer.',
    channel: 'NCH support review',
  },
  {
    title: 'Defective electronics',
    description: 'Policy or warranty documents, installation records, repair bills, and product photographs help build a stronger claim.',
    channel: 'Seller escalation path',
  },
  {
    title: 'Service deficiency',
    description: 'The case file may include service invoices, appointment records, account statements, and written grievances.',
    channel: 'e-Jagriti submission',
  },
  {
    title: 'Delivery and fulfilment issues',
    description: 'Delivery records, payment evidence, and proof of communication often determine the correct next step.',
    channel: 'Consumer complaint route',
  },
];

export function CaseTypes() {
  return (
    <section className="py-32 md:py-40">
      <div className="section-shell">
        <div className="mb-12 max-w-lg">
          <div className="mono-label mb-4 text-accent">Case types</div>
          <h2 className="h2-display text-text">Every grievance is different. The evidence should be clearer.</h2>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col gap-4 pb-8">
          {cases.map((item, index) => (
            <div
              key={item.title}
              className="case-stack-card rounded-card border border-border bg-surface p-6 shadow-soft"
              style={{
                position: 'sticky',
                top: `${90 + index * 18}px`,
                transform: `scale(${1 - index * 0.03})`,
                zIndex: cases.length - index,
                marginTop: index === 0 ? 0 : '-28px',
              }}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mono-label mb-2 text-accent">Scenario {index + 1}</div>
                  <h3 className="mb-2 text-2xl font-semibold tracking-[-0.04em] text-text">{item.title}</h3>
                  <p className="max-w-2xl text-base text-muted">{item.description}</p>
                </div>
                <div className="rounded-button border border-border bg-background px-3 py-2 text-xs uppercase tracking-[0.12em] text-muted">
                  {item.channel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
