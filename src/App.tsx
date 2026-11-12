import { ArrowRight, ShieldCheck, LockKeyhole } from 'lucide-react';

const footerLinks = [
  { heading: 'Platform', links: ['Features', 'Workflow', 'Compliance'] },
  { heading: 'Resources', links: ['Case guides', 'Privacy', 'Support'] },
  { heading: 'Company', links: ['About', 'Contact', 'Security'] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/70 pb-10 pt-16">
      <div className="section-shell">
        <div className="mb-12 text-[clamp(3rem,11vw,12rem)] font-heading font-black leading-none tracking-[-0.08em] text-text">
          ESCALIORA
        </div>

        <div className="grid gap-10 border-t border-border py-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="mb-5 mono-label text-muted">Consumer trust layer</div>
            <p className="max-w-sm text-base text-muted">
              A secure workspace for consumers who need a clear record, a proper draft, and a stronger path toward resolution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-button border border-border bg-background px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                Privacy-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-button border border-border bg-background px-3 py-2">
                <LockKeyhole className="h-4 w-4 text-accent" />
                Secure evidence
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:col-span-2">
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">{group.heading}</h3>
                <ul className="space-y-3 text-base text-text">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-link text-muted hover:text-text">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <form className="flex w-full max-w-md items-center gap-3 rounded-button border border-border bg-background p-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-2 text-sm text-text outline-none placeholder:text-muted"
            />
            <button type="submit" className="button-surface inline-flex items-center gap-2 rounded-button bg-accent px-4 py-2 text-xs uppercase tracking-[0.12em] text-white">
              Join
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="text-sm text-muted">© 2026 ESCALIORA. Rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

