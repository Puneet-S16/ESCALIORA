import type { HTMLAttributes, ReactNode } from 'react';

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-card border border-border bg-surface shadow-soft ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export type CardProps = {
  className?: string;
  children: ReactNode;
};
