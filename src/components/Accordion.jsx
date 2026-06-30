import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-primary"
          >
            <span className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-foreground/80">
              {item.title}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-foreground/40 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="font-sans text-sm leading-relaxed text-foreground/60">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}