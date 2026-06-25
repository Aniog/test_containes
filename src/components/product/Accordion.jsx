import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="border-t border-bone/80">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title} className="border-b border-bone/80">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[11px] tracking-[0.22em] uppercase text-espresso">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "h-4 w-4 text-espresso transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">
                <div className="pb-6 pr-2 text-sm leading-relaxed text-charcoal">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}