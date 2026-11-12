import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const manifestoText =
  "Consumers shouldn't have to navigate complex legal procedures or dig through months of emails just to get a fair resolution. We bridge the gap between a frustrating delay and a formal escalation.";

export function Manifesto() {
  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const words = gsap.utils.toArray<HTMLElement>('.manifesto-word');
    if (!words.length) return;

    words.forEach((word, index) => {
      gsap.to(word, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 1.2,
          id: `manifesto-${index}`,
        },
      });
    });
  }, []);

  return (
    <section id="manifesto" ref={wrapperRef} className="py-32 md:py-40">
      <div className="section-shell">
        <div className="mx-auto max-w-5xl">
          <p className="flex flex-wrap gap-x-2 gap-y-2 text-[clamp(1.7rem,3vw,3.25rem)] font-semibold leading-[1.14] tracking-[-0.05em] text-text">
            {manifestoText.split(' ').map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="manifesto-word inline-block opacity-[0.2] transition-opacity duration-300"
                style={{ transitionDelay: `${index * 12}ms` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
