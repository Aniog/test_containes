import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Accordion = ({ children, className }) => {
  return <div className={cn('divide-y divide-[#D4C9B8]', className)}>{children}</div>;
};

export const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left text-sm tracking-[1px] text-[#1C1B18] hover:text-[#BFA46F] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-sm text-[#4A463F] leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};
