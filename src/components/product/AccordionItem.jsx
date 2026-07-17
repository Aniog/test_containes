import { useState } from 'react';

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-sand/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-[0.15em] uppercase text-brand-ink hover:text-brand-gold transition-colors"
      >
        {title}
        <span className={`transform transition-transform duration-300 text-brand-smoke ${open ? 'rotate-180' : ''}`}>
          &#9660;
        </span>
      </button>
      {open && <div className="pb-5 font-sans text-sm text-brand-smoke leading-relaxed">{children}</div>}
    </div>
  );
}