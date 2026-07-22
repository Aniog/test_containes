import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// A single collapsible accordion row used on the product detail page.
export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left font-sans text-sm font-semibold uppercase tracking-luxe text-ink transition-colors hover:text-gold"
      >
        {title}
        {open ? (
          <Minus size={16} className="text-gold" />
        ) : (
          <Plus size={16} className="text-inkSoft" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-inkSoft">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
