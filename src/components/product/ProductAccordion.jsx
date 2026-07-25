import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SECTIONS = [
  { id: 'description', label: 'Description', contentKey: 'details' },
  { id: 'care', label: 'Materials & Care', contentKey: 'care' },
  { id: 'shipping', label: 'Shipping & Returns', contentKey: 'shipping' },
];

const ProductAccordion = ({ product }) => {
  const [open, setOpen] = useState('description');

  return (
    <div className="mt-10 border-t border-brand-line">
      {SECTIONS.map((section) => {
        const isOpen = open === section.id;
        return (
          <div key={section.id} className="border-b border-brand-line">
            <button
              onClick={() => setOpen(isOpen ? '' : section.id)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-sm uppercase tracking-widest text-brand-ink">
                {section.label}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-brand-muted transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-4 text-sm text-brand-muted leading-relaxed">
                {product[section.contentKey]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductAccordion;
