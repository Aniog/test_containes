import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-10 divide-y divide-border border-t border-border">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold uppercase tracking-ultra text-ink">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-ink-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="pb-4">
                <p className="text-sm text-ink-secondary leading-relaxed">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductAccordion;
