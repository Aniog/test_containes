import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">{title}</span>
        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <div className="text-sm text-velmora-warm leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  );
};

const ProductAccordions = ({ product }) => {
  return (
    <div className="mt-10 border-t border-velmora-border">
      <AccordionItem title="Description">
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <ul className="list-disc pl-4 space-y-1">
          {product.materials.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery in original condition.</p>
      </AccordionItem>
    </div>
  );
};

export default ProductAccordions;
