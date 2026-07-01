import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header w-full text-left"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="py-4 text-sm text-velmora-muted leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
