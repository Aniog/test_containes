import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Premium accordion — single open by default, hairline divider between rows.
 * Title is small-caps eyebrow, body is editorial serif.
 */
export function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="border-t border-hairline">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const isLast = idx === items.length - 1;
        return (
          <div
            key={item.title}
            className={cn("border-b border-hairline", isLast && "border-b-0")}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
            >
              <span className="eyebrow text-ink">{item.title}</span>
              <span
                className={cn(
                  "shrink-0 w-7 h-7 rounded-full border border-hairline flex items-center justify-center transition-colors duration-300",
                  "group-hover:border-ink",
                )}
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="font-serif text-[1.0625rem] md:text-[1.125rem] leading-[1.7] text-ink/80 max-w-[58ch]">
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

/**
 * List variant — used for product detail "Details / Care / Shipping" rows.
 */
export function AccordionList({ title, items }) {
  return (
    <div>
      {title && (
        <p className="eyebrow text-ink mb-3 md:mb-4">{title}</p>
      )}
      <ul className="space-y-2.5">
        {items.map((line, i) => (
          <li
            key={i}
            className="font-serif text-[1.0625rem] leading-[1.65] text-ink/80 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold before:font-sans before:text-sm before:top-0"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}