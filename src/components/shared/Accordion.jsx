import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="border-t border-hairline">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-sm font-medium uppercase tracking-wider text-ink">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`text-ink-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-luxe ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-5 pr-8 text-sm leading-relaxed text-ink-muted">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
