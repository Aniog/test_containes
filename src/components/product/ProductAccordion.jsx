import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left"
      >
        <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-warm-gray leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const ProductAccordion = ({ description, details, shipping }) => {
  return (
    <div className="border-t border-border">
      <AccordionItem title="Description" defaultOpen>
        {description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        {details}
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        {shipping}
      </AccordionItem>
    </div>
  );
};

export default ProductAccordion;
