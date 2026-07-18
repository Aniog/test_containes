import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg text-text-primary">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-text-secondary transition-transform duration-300",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <p className="text-sm text-text-secondary leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
