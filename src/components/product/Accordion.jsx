import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-line">
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <div key={it.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[11px] uppercase tracking-wider2 font-medium text-ink">
                {it.title}
              </span>
              <span className="text-ink-secondary">
                {isOpen ? (
                  <Minus size={16} strokeWidth={1.4} />
                ) : (
                  <Plus size={16} strokeWidth={1.4} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="max-w-prose text-sm leading-relaxed text-ink-secondary">
                  {it.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
