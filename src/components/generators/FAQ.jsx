import { useState } from 'react';
import strings from '../../data/strings.en.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-light-bg">
      <div className="content-container max-w-[800px]">
        <h2 className="text-heading-gray text-[22px] md:text-[28px] mb-[30px] mt-0 text-center">
          {strings.faqHeading}
        </h2>

        <div className="flex flex-col gap-[0px]">
          {strings.faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;

            return (
              <div key={idx} className="border-b border-divider last:border-b-0">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between py-[16px] px-0 bg-transparent border-none cursor-pointer text-left font-heading font-bold uppercase text-[15px] text-hero-dark hover:text-brand-purple transition-colors"
                >
                  <span>{item.q}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`flex-shrink-0 ml-[12px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pb-[16px] text-body-gray text-[14px] leading-[1.7] font-body font-normal normal-case">
                    {item.a.split('\n').map((para, pi) => (
                      <p key={pi} className="m-0 mb-[10px] last:mb-0">{para}</p>
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