import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans uppercase tracking-widest text-[12px] font-medium text-espresso">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-espresso" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-espresso" />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-smooth",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm sm:text-[15px] leading-relaxed text-taupe font-light max-w-prose">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
