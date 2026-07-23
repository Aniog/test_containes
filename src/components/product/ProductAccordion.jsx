import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-espresso font-sans font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ description, material, care }) {
  return (
    <div className="mt-8">
      <AccordionItem title="Description" defaultOpen={true}>
        <p>{description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-2"><strong className="text-espresso">Materials:</strong> {material}</p>
        <p><strong className="text-espresso">Care:</strong> {care}</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p className="mb-2">
          Free worldwide shipping on all orders. Estimated delivery: 5–8 business days.
        </p>
        <p>
          Not in love? Return within 30 days for a full refund. Items must be unworn
          and in original packaging.
        </p>
      </AccordionItem>
    </div>
  );
}