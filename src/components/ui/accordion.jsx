import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn("divide-y divide-velmora-border border-t border-b border-velmora-border", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base tracking-wide text-velmora-fg">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-velmora-muted transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <div className="pb-5 text-sm leading-relaxed text-velmora-muted">
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
