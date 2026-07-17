import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#EDE8E0]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-lg text-[#1A1A1A]">{item.title}</span>
            <ChevronDown 
              className={cn(
                "w-5 h-5 text-[#8B7B6B] transition-transform duration-200",
                openIndex === index && "rotate-180"
              )} 
            />
          </button>
          <div 
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            )}
          >
            <div className="text-[#6B6359] text-sm leading-relaxed pr-8">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
