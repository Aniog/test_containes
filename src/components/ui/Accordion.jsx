import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = ({ children, className }) => {
  return <div className={cn('divide-y divide-[#EDE9E3]', className)}>{children}</div>;
};

export const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[#2C2522]">{title}</span>
        <ChevronDown className={cn('h-5 w-5 text-[#8B7F6F] transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className="pb-4 text-[#5C5248] text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};