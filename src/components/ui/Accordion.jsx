import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="divide-y divide-espresso/10 border-y border-espresso/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="product-title text-[12px] sm:text-[13px] text-espresso">
                {item.title}
              </span>
              <span
                className={cn(
                  "flex-shrink-0 ml-4 inline-flex h-6 w-6 items-center justify-center transition-transform duration-500 ease-velmora",
                  isOpen ? "rotate-180" : "rotate-0"
                )}
                aria-hidden
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div className={cn("accordion-content", isOpen && "open")}>
              <div>
                <div className="pb-6 text-sm leading-relaxed text-espresso/80 space-y-3">
                  {typeof item.content === "string" ? (
                    <p>{item.content}</p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
