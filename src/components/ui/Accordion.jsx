import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionItem({ title, children, defaultOpen = false, className }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cn("border-b border-hairline", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-[0.78rem] tracking-widest2 uppercase font-medium text-ink">
          {title}
        </span>
        <span className="text-ink-700 group-hover:text-gold transition-colors">
          {open ? <Minus size={16} strokeWidth={1.4} /> : <Plus size={16} strokeWidth={1.4} />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-muted text-sm leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, defaultIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultIndex);
  return (
    <div>
      {items.map((it, i) => {
        const open = openIndex === i;
        return (
          <div key={it.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="font-sans text-[0.78rem] tracking-widest2 uppercase font-medium text-ink">
                {it.title}
              </span>
              <span className="text-ink-700 group-hover:text-gold transition-colors">
                {open ? (
                  <Minus size={16} strokeWidth={1.4} />
                ) : (
                  <Plus size={16} strokeWidth={1.4} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                open
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden text-muted text-sm leading-relaxed font-sans">
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
