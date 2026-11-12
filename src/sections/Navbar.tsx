import { useEffect, useState } from 'react';

export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMove = (event: MouseEvent) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest('[data-cursor-view]')));
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[60] hidden md:block ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div
        className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full border border-accent bg-surface/60 text-[10px] font-medium text-accent shadow-soft"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {active ? 'View' : ''}
      </div>
      <div
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}
