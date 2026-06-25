import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { strings } from '@/data/strings';

const t = strings.en.faq;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-8 text-center">{t.heading}</h2>
        <div className="divide-y divide-divider border-t border-b border-divider">
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={i}>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-4 px-0 bg-transparent border-none cursor-pointer text-left"
                >
                  <span className="font-heading font-bold uppercase text-heading-section text-sm pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-body-text shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
                >
                  <p className="text-body-text text-sm m-0 leading-relaxed">{item.a}</p>
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
