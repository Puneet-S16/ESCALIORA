import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { Button } from '../components/Button';

type NavbarProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar({ theme, onToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);
      setVisible(currentY < lastY.current || currentY < 80);
      lastY.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-content items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${
          scrolled ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="z-20 font-heading text-xl font-bold tracking-[-0.04em]">
          ESCALIORA
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <div className="hidden md:block">
            <Button href="#cta" variant="primary" className="px-5 py-2.5 text-xs uppercase tracking-[0.12em]">
              Start a Case
            </Button>
          </div>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-border bg-surface text-text md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-10 bg-background md:hidden"
        >
          <div className="flex min-h-screen flex-col justify-center gap-8 px-6 pt-24">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold tracking-[-0.04em]"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4">
              <Button href="#cta" variant="primary" className="w-full justify-center text-xs uppercase tracking-[0.12em]">
                Start a Case
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
