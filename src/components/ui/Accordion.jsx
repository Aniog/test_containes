import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-velmora-border last:border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header w-full text-left"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
