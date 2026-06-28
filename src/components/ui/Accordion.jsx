import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = ({ children, className }) => {
  return <div className={cn('divide-y divide-[#EDE8E0]', className)}>{children}</div>;
};

export const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-[#1C1C1C]">{title}</span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-[#6B665F] transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <div className="text-[#6B665F] text-sm leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};
