import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-sans font-semibold tracking-widest uppercase text-velmora-black">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-velmora-stone transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5">
          <p className="text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductAccordions = ({ product }) => {
  return (
    <div className="mt-12 md:mt-16 border-t border-velmora-border pt-8">
      <AccordionItem title="Description" defaultOpen>
        {product.description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <div className="space-y-3">
          <p><strong>Materials:</strong> {product.materials}</p>
          <p>{product.care}</p>
        </div>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <div className="space-y-3">
          <p>{product.shipping}</p>
          <p>{product.returns}</p>
        </div>
      </AccordionItem>
    </div>
  );
};

export default ProductAccordions;
