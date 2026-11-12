import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Does this replace a lawyer?',
    answer: 'No. It gives you a structured workspace to collect evidence, track deadlines, and prepare a stronger complaint packet. A lawyer can still help with final review if needed.',
  },
  {
    question: 'How is my data protected?',
    answer: 'Evidence is stored in a secure, access-controlled workspace with clear versioning and audit-ready organization. The system is built to keep documents and case history in one place.',
  },
  {
    question: 'What is RAG technology?',
    answer: 'It means the AI checks your uploaded records and the relevant complaint process before drafting. That reduces guesswork and keeps each draft grounded in actual evidence.',
  },
  {
    question: 'Does it file the case for me?',
    answer: 'It prepares the case package, timeline, and draft for submission. It helps you prepare a strong filing, but the final submission path still follows the required consumer process and channel.',
  },
  {
    question: 'What happens if the SLA passes?',
    answer: 'The system flags the missed deadline, highlights the outstanding action, and makes the next step visible so you can decide the right escalation route without losing the record.',
  },
  {
    question: 'What export formats are supported?',
    answer: 'You can export a complaint summary, fact sheet, timeline, and draft package in formats that are easy to review, share, or submit to the appropriate authority.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="section-shell">
        <div className="mb-12 max-w-xl">
          <div className="mono-label mb-4 text-accent">FAQ</div>
          <h2 className="h2-display text-text">Clear answers for the steps that matter most.</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-card border border-border bg-surface shadow-soft">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-text md:text-lg">{item.question}</span>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
                    <Plus className={`h-4 w-4 text-text transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} 
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 text-base leading-7 text-muted md:px-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
