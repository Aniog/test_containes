import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-hairline/70">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div key={item.title} className="border-b border-hairline/70">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-sans text-[12px] uppercase tracking-widest2 text-espresso-300">
                {item.title}
              </span>
              <span className="text-espresso-300">
                {open ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-smooth",
                open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-muted leading-relaxed max-w-prose">
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
