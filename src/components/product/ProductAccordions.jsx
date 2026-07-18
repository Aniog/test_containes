import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left"
      >
        <span className="font-sans text-sm tracking-widest uppercase text-velmora-text">{title}</span>
        {open ? <ChevronUp size={18} className="text-velmora-muted" /> : <ChevronDown size={18} className="text-velmora-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-velmora-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductAccordions({ product }) {
  return (
    <div className="mt-12 md:mt-16">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.description}</p>
        <p className="mt-3">Designed for everyday wear, this piece features a secure closure and lightweight construction that won't weigh you down. The 18K gold plating provides a rich, warm finish that complements all skin tones.</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <p>{product.materials}</p>
        <p className="mt-3">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to restore shine.</p>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
        <p className="mt-3">We offer hassle-free 30-day returns. Items must be unworn and in original packaging. Refunds are processed within 5 business days of receiving the return.</p>
      </AccordionItem>
    </div>
  );
}
