import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cursor } from './components/Cursor';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { StatsStrip } from './sections/StatsStrip';
import { Manifesto } from './sections/Manifesto';
import { WhyEscaliora } from './sections/WhyEscaliora';
import { Workflow } from './sections/Workflow';
import { HowItWorks } from './sections/HowItWorks';
import { CaseTypes } from './sections/CaseTypes';
import { EvidenceSupported } from './sections/EvidenceSupported';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('escaliora-theme');
    return saved === 'light' || saved === 'dark' ? saved : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('escaliora-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame = 0;
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    const update = () => ScrollTrigger.refresh();
    window.addEventListener('load', update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('load', update); lenis.destroy(); };
  }, []);

  return <div className="min-h-screen bg-background text-text transition-colors duration-300">
    <div className="progress-track" aria-hidden="true"><div id="scroll-progress" /></div>
    <Cursor />
    <Navbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    <main><Hero /><StatsStrip /><Manifesto /><WhyEscaliora /><Workflow /><HowItWorks /><CaseTypes /><EvidenceSupported /><FAQ /><FinalCTA /></main>
    <Footer />
  </div>;
}
