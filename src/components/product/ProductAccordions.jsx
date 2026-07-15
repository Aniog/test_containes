import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velvet-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-sm uppercase tracking-widest font-sans font-medium text-velvet-base hover:text-velvet-accent transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velvet-muted leading-relaxed">{children}</p>
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
        <strong className="font-medium text-velvet-base block mb-1">Materials</strong>
        {product.materials}
        <br /><br />
        <strong className="font-medium text-velvet-base block mb-1">Care</strong>
        {product.care}
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        {product.shipping}
      </AccordionItem>
    </div>
  );
}
