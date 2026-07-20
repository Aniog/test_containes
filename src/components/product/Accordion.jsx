import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-velmora-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-velmora-border">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-sans text-xs tracking-[0.12em] uppercase text-velmora-charcoal">
              {item.title}
            </span>
            <ChevronDown
              size={16}
              className={`text-velmora-warmGray transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="font-sans text-sm text-velmora-warmGray leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
