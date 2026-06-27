import { useState } from 'react';

export default function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="py-[40px]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-10">{t.heading}</h2>

        <div className="divide-y divide-divider border-t border-b border-divider">
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-4 text-start font-heading font-bold text-[14px] text-heading-section uppercase hover:text-brand-purple transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
                  >
                    <span>{item.q}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`shrink-0 ms-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                  <p className="pb-4 text-body-text text-[14px] leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
