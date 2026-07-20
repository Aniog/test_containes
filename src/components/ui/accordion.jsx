import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-line">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-serif text-lg md:text-xl text-brand-ink"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-4 text-sm text-brand-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="border-t border-brand-line">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
