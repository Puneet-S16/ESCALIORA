import { MoonStar, SunMedium } from 'lucide-react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      data-state={theme}
      onClick={onToggle}
      className="theme-toggle-button relative inline-flex h-11 w-20 items-center rounded-full border border-border bg-surface p-1 text-text shadow-soft transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        className={`absolute left-1 top-1 h-9 w-9 rounded-full bg-accent transition-transform duration-300 ${
          isDark ? 'translate-x-9' : 'translate-x-0'
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2">
        <SunMedium className={`theme-toggle-icon h-4 w-4 ${isDark ? 'text-white/70' : 'text-accent'}`} />
        <MoonStar className={`theme-toggle-icon h-4 w-4 ${isDark ? 'text-white' : 'text-text/60'}`} />
      </span>
    </button>
  );
}
