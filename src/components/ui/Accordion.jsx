import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accordion — quiet, editorial disclosure list. Each panel has an uppercased
 * serif/sans label and a +/− chevron. Open state is purely visual (no animation
 * library), so we use grid-template-rows for smooth height transitions.
 */
export function Accordion({ items, defaultOpenIndex = 0, className }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={cn("border-t border-hairline", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `acc-panel-${idx}`;
        const buttonId = `acc-button-${idx}`;
        return (
          <div key={item.title} className="border-b border-hairline">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-gold-deep"
              >
                <span className="text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-ink">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center text-ink-soft transition-transform duration-300 ease-editorial",
                    isOpen && "rotate-180 text-gold"
                  )}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="h-4 w-4" strokeWidth={1.5} /> : <Plus className="h-4 w-4" strokeWidth={1.5} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="overflow-hidden"
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 320ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              <div className="min-h-0">
                <div className="pb-6 pr-2 text-[0.9375rem] leading-relaxed text-ink-soft">
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

export default Accordion;
