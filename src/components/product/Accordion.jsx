import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="product-name text-ink group-hover:text-gold-deep transition-colors">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "w-4 h-4 text-ink/70 transition-transform duration-500 ease-velvet",
                  isOpen ? "rotate-45" : "rotate-0",
                )}
                strokeWidth={1.25}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-velvet",
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="pb-6 pr-8 text-sm sm:text-[15px] leading-relaxed text-ink/75">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
