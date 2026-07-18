import { useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-hairline">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-sans text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200"
          >
            <span>{item.title}</span>
            <span className={cn("transition-transform duration-300 text-base", openIndex === i ? "rotate-45" : "rotate-0")}>
              +
            </span>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === i ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <p className="font-sans text-sm text-taupe leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
