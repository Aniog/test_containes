import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="product-name text-sm">{title}</span>
        <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-text-secondary leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={index === 0}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
