import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-border/10 py-4">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-xs uppercase tracking-widest font-medium transition-colors group-hover:text-primary">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
