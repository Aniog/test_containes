import { useState } from 'react';
import strings from '@/strings.en.js';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="py-[40px] bg-bg-light">
      <div className="section-container max-w-[800px]">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading leading-[1.2] mb-[20px]">
          {strings.faqHeading}
        </h2>
        <div className="space-y-[10px]">
          {strings.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-btn-${i}`;

            return (
              <div key={i} className="card">
                <h3>
                  <button
                    id={buttonId}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between text-start font-heading font-bold uppercase text-[14px] text-heading-dark leading-[1.3] bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-[18px] h-[18px] text-brand-purple shrink-0 ms-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-[10px]' : 'max-h-0'}`}
                >
                  <p className="text-body text-[14px] leading-[1.6]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}