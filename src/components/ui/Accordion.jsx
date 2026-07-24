import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="product-name text-sm">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-ink-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-sm text-ink-secondary leading-relaxed">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
