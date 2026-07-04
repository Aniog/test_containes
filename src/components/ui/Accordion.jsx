import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [open, setOpen] = useState(defaultOpenIndex);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink/70" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-ink/70" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] md:text-[15px] text-ink/80 leading-relaxed max-w-2xl">
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
