import { useState } from 'react';
import { strings } from '@/data/generators';
import { ChevronIcon } from './Icons';

const t = strings.en;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:py-[60px]">
        <h2 className="font-heading text-[26px] md:text-[32px] font-bold leading-[1.2] uppercase text-[#4B5056] mb-8 md:mb-10">
          {t.faq.heading}
        </h2>
        <div className="flex flex-col gap-0 border-t border-[#E2E4E7]">
          {t.faq.questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={index} className="border-b border-[#E2E4E7]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
                  >
                    <span className="font-heading text-[15px] font-bold uppercase text-[#4B5056]">
                      {item.q}
                    </span>
                    <ChevronIcon
                      className="w-5 h-5 flex-shrink-0"
                      expanded={isOpen}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden transition-all duration-200 ease-out"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-5 flex flex-col gap-3">
                    {item.a.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-[14px] text-[#636972] leading-[1.6]"
                      >
                        {paragraph}
                      </p>
                    ))}
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
