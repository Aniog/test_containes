import React, { useState } from 'react';
import { strings } from '../../constants/strings';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const FAQ = () => {
  const { faq } = strings.en;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="container-custom py-[60px] md:py-[80px] border-t border-[#E2E4E7]">
      <div className="text-center mb-10">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] uppercase">{faq.title}</h2>
      </div>
      <div className="max-w-[800px] mx-auto space-y-3">
        {faq.questions.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border border-[#E2E4E7] rounded-[4px] bg-white overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="text-[15px] font-bold text-[#4B5056] uppercase tracking-tight">
                  {item.q}
                </span>
                <span className="text-[#8159BB]">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={cn(
                  "transition-all duration-300 ease-in-out px-5 overflow-hidden",
                  isOpen ? "max-h-[500px] pb-5" : "max-h-0"
                )}
                role="region"
              >
                <div className="text-[#636972] text-[14px] leading-relaxed pt-2">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
