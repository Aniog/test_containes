import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-cocoa-900/10">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.title} className="accordion-item">
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-cocoa-900" strokeWidth={1.4} />
              ) : (
                <Plus className="w-4 h-4 text-cocoa-900" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn("accordion-content", isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0")}
              aria-hidden={!isOpen}
            >
              <div className="accordion-content-inner">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
