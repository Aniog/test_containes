import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button 
        className="accordion-header w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="py-4 text-sm leading-relaxed text-base-800 pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
