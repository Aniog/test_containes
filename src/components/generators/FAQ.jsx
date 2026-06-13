import { useState, useCallback } from 'react';
import strings from '../../data/strings';

const ChevronDown = ({ isOpen }) => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQ = () => {
  const { faq } = strings.en;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="py-10 md:py-[40px] bg-surface">
      <div className="max-w-[800px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0">
            {faq.heading}
          </h2>
        </div>

        <div className="border border-border rounded-card bg-white overflow-hidden">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={index} className={index > 0 ? 'border-t border-divider' : ''}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-transparent border-none cursor-pointer text-left font-heading font-bold uppercase text-sm text-heading hover:bg-surface transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown isOpen={isOpen} />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[400px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-body m-0 mb-3 leading-relaxed">
                    {item.answer}
                  </p>
                  {item.answer2 && (
                    <p className="text-sm text-body m-0 leading-relaxed">
                      {item.answer2}
                    </p>
                  )}
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
