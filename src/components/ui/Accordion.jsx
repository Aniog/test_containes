import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-light-gray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg font-medium text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-brand-warm-gray transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-5 text-brand-warm-gray leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ children }) {
  return <div>{children}</div>;
}
