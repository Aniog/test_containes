import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items }) {
  const [open, setOpen] = useState(items.map((_, i) => i === 0));

  const toggle = (index) => {
    setOpen((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="border-t border-stone">
      {items.map((item, index) => (
        <div key={item.title} className="border-b border-stone">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left text-espresso hover:text-accent transition-colors"
            aria-expanded={open[index]}
          >
            <span className="font-serif text-lg">{item.title}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${open[index] ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open[index] ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-taupe leading-relaxed text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
