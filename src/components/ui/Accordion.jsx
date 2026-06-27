import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        className={cn(
          'w-full py-5 flex items-center justify-between text-left',
          'font-sans text-sm font-medium text-[var(--color-text-primary)]',
          'transition-colors duration-200 hover:text-[var(--color-accent)]'
        )}
      >
        <span>{title}</span>
        <ChevronDown 
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </button>
      <div 
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;