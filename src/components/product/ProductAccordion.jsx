import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-warm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wider font-sans font-medium text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductAccordion = ({ product }) => {
  return (
    <div className="mt-10 border-b border-warm">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p className="mb-3">{product.materials}</p>
        <p>
          <strong className="text-charcoal">Care:</strong> Avoid contact with water, perfume, and lotions. 
          Store in the provided pouch when not wearing. Gently polish with a soft cloth to maintain shine.
        </p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p className="mb-2">
          <strong className="text-charcoal">Shipping:</strong> Free worldwide shipping on all orders. 
          Standard delivery 5-7 business days. Express delivery 2-3 business days.
        </p>
        <p>
          <strong className="text-charcoal">Returns:</strong> We offer a 30-day return policy. 
          Items must be unworn and in original packaging. Contact us to initiate a return.
        </p>
      </AccordionItem>
    </div>
  );
};

export default ProductAccordion;
