import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-trigger"
      >
        <span>{title}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="py-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
}
