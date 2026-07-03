import React, { useState } from 'react';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left font-serif text-lg text-ink"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`ml-4 text-ink-tertiary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-4 text-sm leading-relaxed text-ink-secondary">{children}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="divide-y divide-border">
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
