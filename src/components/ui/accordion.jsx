import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ value, children, className }) => (
  <div className={cn('border-b border-slate-200', className)}>{children}</div>
);

const AccordionTrigger = ({ children, onClick, isOpen, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'flex flex-1 items-center justify-between py-4 font-medium text-left text-slate-900 transition-all hover:underline',
      className
    )}
  >
    {children}
    <ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} />
  </button>
);

const AccordionContent = ({ children, isOpen, className }) => (
  <div
    className={cn(
      'overflow-hidden text-sm text-slate-600 transition-all',
      isOpen ? 'max-h-96 pb-4' : 'max-h-0',
      className
    )}
  >
    {children}
  </div>
);

const Accordion = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger onClick={() => setOpenIndex(openIndex === index ? null : index)} isOpen={openIndex === index}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent isOpen={openIndex === index}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
