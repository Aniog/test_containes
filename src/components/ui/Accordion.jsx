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
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base tracking-[1px] text-[#0A0806]">{title}</span>
        <ChevronDown 
          className={cn('h-4 w-4 text-[#C5A46E] transition-transform duration-200', isOpen && 'rotate-180')} 
        />
      </button>
      <div 
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-sm leading-relaxed text-[#4A4640] pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};
