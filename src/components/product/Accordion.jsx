import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium tracking-widest uppercase">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-muted leading-relaxed">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
