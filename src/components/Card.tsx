import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'button-surface inline-flex items-center justify-center gap-2 rounded-button border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background group';

  const variants = {
    primary: 'border-accent bg-accent text-white shadow-soft',
    secondary: 'border-border bg-surface text-text',
    ghost: 'border-transparent bg-transparent text-text',
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-active:scale-95" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button {...props} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
