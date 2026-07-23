import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-umber last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base font-medium uppercase tracking-[0.16em] text-ivory">
          {title}
        </span>
        {open ? (
          <Minus className="h-4 w-4 shrink-0 text-gold" />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-sand" />
        )}
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="font-sans text-sm leading-relaxed text-sand">{children}</div>
        </div>
      </div>
    </div>
  );
}
