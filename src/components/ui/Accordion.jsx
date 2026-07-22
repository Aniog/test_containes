import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="divide-y divide-taupe">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-manrope text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors duration-200">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="font-manrope text-sm text-warm-gray leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
