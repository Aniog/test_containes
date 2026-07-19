import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-warmgray transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-warmgray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductAccordion = ({ product }) => {
  return (
    <div className="mt-8">
      <AccordionItem title="Description">
        <p>{product.description}</p>
        <ul className="mt-3 space-y-1.5 list-disc list-inside">
          <li>18K gold-plated for lasting shine</li>
          <li>Hypoallergenic and nickel-free</li>
          <li>Designed for everyday wear</li>
          <li>Comes in signature Velmora pouch</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p>{product.details.materials}</p>
        <p className="mt-3">{product.details.care}</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>{product.details.shipping}</p>
        <p className="mt-3">{product.details.returns}</p>
      </AccordionItem>
    </div>
  );
};

export default ProductAccordion;
