import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8E2DB]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm tracking-widest uppercase text-[#1A1A1A]">{title}</span>
        <ChevronDown
          size={18}
          className={`text-[#6B6560] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-[#6B6560] leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}

export default function ProductAccordion({ product }) {
  return (
    <div>
      <AccordionItem
        title="Description"
        content={product.description}
        defaultOpen={true}
      />
      <AccordionItem
        title="Materials & Care"
        content={product.materials_care}
      />
      <AccordionItem
        title="Shipping & Returns"
        content="Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout. We offer hassle-free 30-day returns on all unworn items in original packaging. Simply contact our team to initiate a return."
      />
    </div>
  );
}
