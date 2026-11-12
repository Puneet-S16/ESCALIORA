import type { HTMLAttributes, ReactNode } from 'react';
type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };
export function Card({ children, className = '', ...props }: Props) { return <article {...props} className={`rounded-[12px] border border-border bg-surface shadow-[0_16px_48px_rgba(15,23,42,.05)] ${className}`}>{children}</article>; }
