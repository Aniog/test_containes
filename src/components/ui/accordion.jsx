import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext({});

const Accordion = ({ children, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div className={cn('divide-y divide-[#E5E0D8] border-t border-[#E5E0D8]', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, index, className }) => {
  return <div className={cn('', className)}>{children}</div>;
};

const AccordionTrigger = ({ children, index, className }) => {
  const { openIndex, toggle } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <button
      type="button"
      onClick={() => toggle(index)}
      className={cn(
        'flex w-full items-center justify-between py-5 text-left transition-colors duration-300',
        'text-[#1A1A1A] hover:text-[#C9A96E]',
        className
      )}
    >
      <span className="text-sm tracking-widest uppercase font-medium">{children}</span>
      <ChevronDown
        className={cn('h-4 w-4 transition-transform duration-300', isOpen && 'rotate-180')}
      />
    </button>
  );
};

const AccordionContent = ({ children, index, className }) => {
  const { openIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('text-sm leading-relaxed text-[#4A4A4A]', className)}>{children}</div>
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
