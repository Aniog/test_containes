import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, open: initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="border-b border-velvet-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.12em] uppercase font-medium text-velvet-700">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-velvet-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-velvet-500 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  return (
    <div className="border-t border-velvet-200 mt-8">
      <AccordionItem title="Description" open>
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-3">{product.details}</p>
        <p>{product.care}</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>{product.shipping}</p>
      </AccordionItem>
    </div>
  );
}
