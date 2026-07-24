import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-medium tracking-widest-xl uppercase text-charcoal-700">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-charcoal-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-charcoal-500 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ProductAccordions({ product }) {
  return (
    <div className="mt-10 pt-6 border-t border-cream-300">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.longDescription}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-2">{product.materials}</p>
        <p>{product.care}</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p className="mb-2">{product.shipping}</p>
        <p>{product.returns}</p>
      </AccordionItem>
    </div>
  );
}
