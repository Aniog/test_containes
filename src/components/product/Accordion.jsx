import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `acc-panel-${i}`;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={id}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="font-sans text-[11px] uppercase tracking-editorial font-medium text-ink">
                {item.title}
              </span>
              <span
                className={cn(
                  "text-ink transition-transform duration-500 ease-editorial",
                  isOpen ? "rotate-180" : ""
                )}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              id={id}
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="font-sans text-sm text-muted-light leading-relaxed max-w-prose">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
