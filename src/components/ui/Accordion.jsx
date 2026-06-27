import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8E4DC]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-[1.5px] text-[#2C2823]">{title}</span>
        <ChevronDown 
          size={16} 
          className={`text-[#6B665F] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-[#6B665F] leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;