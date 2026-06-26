import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E2E8F0]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className="text-base font-medium text-[#1E293B]">{item.title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1E3A5F]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#64748B]" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-[#64748B] leading-relaxed">{item.content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("divide-y divide-[#E2E8F0]", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export { Accordion };