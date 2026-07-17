import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, open: defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-taupe leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ product }) {
  return (
    <div className="mt-8">
      <AccordionItem title="Description" open>
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-3">
          <strong className="text-espresso">Materials:</strong> {product.materials}
        </p>
        <p>
          <strong className="text-espresso">Care:</strong> {product.care}
        </p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p className="mb-3">
          <strong className="text-espresso">Shipping:</strong> {product.shipping}
        </p>
        <p>
          <strong className="text-espresso">Returns:</strong> {product.returns}
        </p>
      </AccordionItem>
    </div>
  );
}
