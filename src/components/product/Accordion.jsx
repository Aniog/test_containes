import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="text-[12px] uppercase tracking-wider-2 font-medium text-ink group-hover:text-gold transition-colors">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-ink" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out-soft",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-sm text-ink-muted leading-relaxed text-pretty max-w-prose">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
