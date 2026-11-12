import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; children: ReactNode; className?: string };
export function Button({ href, children, className = '', ...props }: Props) {
  const classes = `button-surface inline-flex items-center justify-center gap-3 rounded-[6px] border border-accent bg-accent px-6 py-3 font-medium text-white transition-transform active:scale-[.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`;
  const inner = <>{children}<ArrowRight aria-hidden="true" size={17} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" /></>;
  return href ? <a href={href} className={`${classes} group`}>{inner}</a> : <button {...props} className={`${classes} group`}>{inner}</button>;
}
