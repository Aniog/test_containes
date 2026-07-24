import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#E8E2D9]">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-trigger w-full flex items-center justify-between py-4 text-left"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="accordion-content pb-4 text-sm leading-relaxed text-[#6B645C]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;