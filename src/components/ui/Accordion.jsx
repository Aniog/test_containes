import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border-light)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="serif-heading text-lg tracking-wide">{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 text-[var(--velmora-text-muted)] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
