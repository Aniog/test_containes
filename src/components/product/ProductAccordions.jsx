import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-[0.08em] uppercase">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductAccordions({ product }) {
  return (
    <div className="px-4 md:px-8 mt-8">
      <AccordionItem title="Description" defaultOpen>
        {product.description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <strong>Materials:</strong> {product.materials}
        <br /><br />
        <strong>Care:</strong> {product.care}
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.
        <br /><br />
        30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.
      </AccordionItem>
    </div>
  );
}
