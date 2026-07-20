import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={cn("divide-y divide-hairline border-y border-hairline", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-1">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="product-name text-ink group-hover:text-gold-deep transition-colors">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "w-4 h-4 text-ink transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden text-ink/80 text-[15px] leading-relaxed max-w-prose2">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
