import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-warm-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-[0.1em] uppercase text-espresso font-medium"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductAccordions({ product }) {
  return (
    <div className="mt-10">
      <AccordionItem title="Description" defaultOpen>
        {product.description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-2"><strong className="text-espresso">Materials:</strong> {product.materials}</p>
        <p><strong className="text-espresso">Care:</strong> {product.care}</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        {product.shipping}
      </AccordionItem>
    </div>
  );
}
