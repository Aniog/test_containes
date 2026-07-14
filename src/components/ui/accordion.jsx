import React, { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  return context;
};

export const Accordion = ({ children, type = 'single', collapsible = true, className }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      if (prev.includes(value)) {
        return collapsible ? [] : prev.filter((item) => item !== value);
      }
      return type === 'single' ? [value] : [...prev, value];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('border-t border-[#e5e5e5]', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, children, className }) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(value);

  return (
    <div className={cn('border-b border-[#e5e5e5]', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, onToggle: () => toggleItem(value) });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger = ({ children, isOpen, onToggle, className }) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left font-medium text-[#1a1a1a] hover:text-[#b8860b] transition-colors',
        className
      )}
    >
      <span className="font-serif text-base md:text-lg">{children}</span>
      <ChevronDown
        className={cn('h-4 w-4 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
      />
    </button>
  );
};

export const AccordionContent = ({ children, isOpen, className }) => {
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('pb-4 pt-0 text-sm text-[#5c5c5c] leading-relaxed', className)}>
        {children}
      </div>
    </div>
  );
};
