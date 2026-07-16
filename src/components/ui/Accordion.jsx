import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#E5E0D8]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-lg text-[#1A1A1A]">{item.title}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-[#8B8178] transition-transform duration-200',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <p className="text-[#4A4640] leading-relaxed pr-8">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
