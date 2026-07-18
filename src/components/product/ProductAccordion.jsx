import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProductAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button 
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[11px] uppercase-extra font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 opacity-40" /> : <ChevronDown className="w-4 h-4 opacity-40" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm opacity-60 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProductAccordion;
