import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-line/70">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.title} className="border-b border-line/70">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[12px] uppercase tracking-[0.22em] text-ink font-medium">
                {item.title}
              </span>
              <span className="text-ink" aria-hidden="true">
                {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-[15px] leading-relaxed text-ink/80 max-w-prose">
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
