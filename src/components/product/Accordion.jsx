import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-stone border-y border-stone">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink">
                {item.title}
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  "shrink-0 text-gold transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-400 ease-luxe",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[14px] leading-relaxed text-ink-soft">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
