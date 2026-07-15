import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-mocha/50 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-mocha/70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ProductAccordion({ product }) {
  return (
    <div>
      <AccordionItem title="Description" defaultOpen>
        {product.description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        {product.materials}
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        {product.shipping}
      </AccordionItem>
    </div>
  );
}
