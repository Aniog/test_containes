import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between py-5 text-left text-ink hover:text-gold-600 transition-colors"
            >
              <span className="text-[11px] uppercase tracking-widest2 font-medium">
                {item.title}
              </span>
              <span className="text-ink/80">
                {open ? (
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm md:text-[15px] text-taupe leading-relaxed max-w-prose">
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
