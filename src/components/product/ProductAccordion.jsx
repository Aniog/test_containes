import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-cream-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm tracking-widest uppercase text-charcoal-900 font-medium">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-charcoal-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 text-charcoal-700 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductAccordion = ({ description, details, shipping }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    { title: 'Description', content: description },
    { title: 'Materials & Care', content: details },
    { title: 'Shipping & Returns', content: shipping },
  ];

  return (
    <div className="border-t border-cream-200">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default ProductAccordion;
