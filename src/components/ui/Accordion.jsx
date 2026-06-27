import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items = [], defaultOpen = 0, className }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `accordion-${item.title.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              className="w-full flex items-center justify-between py-5 px-0 text-left group"
            >
              <span className="text-label text-espresso group-hover:text-espresso-soft transition-colors">
                {item.title}
              </span>
              <Plus
                strokeWidth={1.25}
                className={cn(
                  "w-4 h-4 text-espresso transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <div
              id={`${id}-content`}
              role="region"
              aria-labelledby={id}
              className={cn(
                "accordion-content",
                isOpen && "is-open"
              )}
            >
              <div>
                <div className="pb-6 pr-10 text-sm leading-relaxed text-espresso-soft">
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