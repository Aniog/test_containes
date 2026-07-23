import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-warm-gray">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-warm-gray">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-xs uppercase tracking-widest text-ink">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`text-stone transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-sm leading-relaxed text-stone">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
