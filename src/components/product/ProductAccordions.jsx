import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-[0.1em] uppercase font-medium">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductAccordions({ product }) {
  return (
    <div className="mt-12 lg:mt-16">
      <Accordion title="Description" defaultOpen={true}>
        <p>{product.description}</p>
        <p className="mt-3">
          Designed for everyday wear, this piece features a durable 18K gold plating over a brass base. 
          The hypoallergenic construction ensures comfort for sensitive skin. Each piece is carefully 
          inspected for quality before shipping.
        </p>
      </Accordion>
      <Accordion title="Materials & Care">
        <p>{product.materials_care}</p>
        <p className="mt-3">
          To maintain the beauty of your jewelry, remove before swimming, showering, or exercising. 
          Store in the provided pouch when not wearing. Clean gently with a soft, dry cloth.
        </p>
      </Accordion>
      <Accordion title="Shipping & Returns">
        <p>{product.shipping}</p>
        <p className="mt-3">
          All orders are carefully packaged in our signature Velmora gift box. 
          Express shipping available at checkout.
        </p>
      </Accordion>
    </div>
  );
}
