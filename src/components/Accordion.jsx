import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items.map((_, i) => i === 0));

  const toggle = (index) => {
    setOpen((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="border-t border-velmora-linen">
      {items.map((item, index) => (
        <div key={index} className="border-b border-velmora-linen">
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left"
            aria-expanded={open[index]}
          >
            <span className="font-serif text-lg text-velmora-espresso">
              {item.title}
            </span>
            <ChevronDown
              size={18}
              className={`text-velmora-taupe transition-transform duration-300 ${
                open[index] ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open[index] ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-velmora-mocha">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
