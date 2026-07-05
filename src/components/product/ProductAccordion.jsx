import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm tracking-wider text-[var(--color-text-primary)]">
          {title}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
