import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[40px]">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.faq.heading}
        </h2>
        <div className="border border-card-border rounded-[3px] divide-y divide-divider">
          {t.faq.items.map((item, i) => {
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
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-[20px] text-start font-heading text-[13px] md:text-[14px] text-heading-section uppercase hover:text-brand-purple transition-colors focus:outline-2 focus:outline-offset-[-2px] focus:outline-brand-purple"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-[18px] h-[18px] text-brand-purple shrink-0 ms-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`collapse-transition ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-[20px] pb-[20px] text-body-text text-[14px] leading-[1.6]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
