import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="accordion-trigger"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
          >
            <div className="py-4 pr-8 text-sm text-[var(--color-text-muted)] leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
