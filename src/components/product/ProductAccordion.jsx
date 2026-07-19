import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-brand-line">
      {items.map((item, idx) => (
        <div key={item.title} className="border-b border-brand-line">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-base md:text-lg text-brand-ink">{item.title}</span>
            <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === idx && (
            <div className="pb-4 text-sm text-brand-muted leading-relaxed whitespace-pre-line">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
