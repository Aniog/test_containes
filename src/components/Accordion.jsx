import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E5DFD6]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-trigger w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-[0.05em] font-medium">{title}</span>
        <ChevronDown
          size={16}
          className={`text-[#6B6359] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-6 text-sm text-[#6B6359] leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
