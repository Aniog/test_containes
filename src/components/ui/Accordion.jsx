import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#E8E4DE]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-[#2C2825] tracking-[0.5px]">{item.title}</span>
            <ChevronDown 
              className={cn(
                "w-4 h-4 text-[#8B8178] transition-transform duration-200",
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
            <p className="text-[#5C5651] leading-relaxed pr-8">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
