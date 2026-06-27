import React, { useState } from 'react';
import { strings } from '../lib/strings';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const s = strings.en.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="bg-white py-20 border-t border-divider">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl text-center text-heading-dark mb-14 tracking-tight">
          {s.title}
        </h2>
        
        <div className="divide-y divide-divider border-t border-b border-divider">
          {s.questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-2">
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="text-sm md:text-base font-bold text-heading-dark group-hover:text-brand-purple transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-body-text transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm text-body-text leading-relaxed">
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
};

export default FAQ;
