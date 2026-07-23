import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

function Item({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-[12px] font-semibold uppercase tracking-widest2 text-espresso">
          {title}
        </span>
        <Plus
          size={18}
          className={cn("shrink-0 text-gold-deep transition-transform duration-300", open && "rotate-45")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-luxe",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-2 font-body text-sm leading-relaxed text-cocoa/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <Item key={item.title} title={item.title} defaultOpen={i === 0}>
          {item.content}
        </Item>
      ))}
    </div>
  );
}
