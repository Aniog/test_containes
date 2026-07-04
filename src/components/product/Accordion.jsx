import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);

  return (
    <div className="border-t border-hairline">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        const panelId = `acc-panel-${idx}`;
        const buttonId = `acc-button-${idx}`;
        return (
          <div key={item.title} className="border-b border-hairline">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-[12px] uppercase tracking-[0.22em] text-ink font-medium group-hover:text-gold-deep transition-colors">
                  {item.title}
                </span>
                {isOpen ? (
                  <Minus className="w-4 h-4 text-ink" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-4 h-4 text-ink" strokeWidth={1.5} />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm md:text-[15px] text-ink-soft leading-relaxed max-w-prose">
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
