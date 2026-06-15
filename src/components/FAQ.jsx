import React, { useState } from 'react';
import { strings } from '@/lib/strings';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const t = strings.en.faq;
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--light-bg)]">
      <div className="container-custom max-w-[800px]">
        <h2 className="section-title text-center">{t.title}</h2>
        
        <div className="mt-[40px] flex flex-col gap-[10px]">
          {t.questions.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className="bg-white border border-[var(--card-border)] rounded-[4px] overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-[20px] text-left hover:bg-[var(--light-bg)] transition-all"
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-heading text-[14px] text-[var(--hero-h1-dark)]">
                    {item.q}
                  </span>
                  {isActive ? <ChevronUp className="w-5 h-5 text-[var(--body-text)]" /> : <ChevronDown className="w-5 h-5 text-[var(--body-text)]" />}
                </button>
                
                <div 
                  id={`faq-answer-${idx}`}
                  className={`accordion-content ${isActive ? 'max-h-[500px]' : 'max-h-0'}`}
                  role="region"
                >
                  <div className="p-[20px] pt-0 text-[14px] text-[var(--body-text)] border-t border-[var(--subtle-divider)]">
                    <p>{item.a}</p>
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
