import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductAccordion = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="border-t border-brand-line">
      {items.map((item) => (
        <div key={item.title} className="border-b border-brand-line">
          <button
            type="button"
            onClick={() => setOpen((prev) => (prev === item.title ? null : item.title))}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-brand-ink">{item.title}</span>
            <ChevronDown className={`h-4 w-4 text-brand-muted transition-transform ${open === item.title ? 'rotate-180' : ''}`} />
          </button>
          {open === item.title && (
            <div className="pb-4">
              <p className="text-sm text-brand-muted leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
