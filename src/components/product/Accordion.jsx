import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-border/60 border-t border-border/60">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-foreground hover:text-gold transition-colors"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}