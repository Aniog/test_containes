import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="border-t border-sand">
      {sections.map((s, i) => {
        const open = i === openIndex;
        return (
          <div key={s.title} className="border-b border-sand">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="text-xs uppercase tracking-[0.22em] text-espresso">
                {s.title}
              </span>
              {open ? (
                <Minus className="w-4 h-4 text-espresso/70" strokeWidth={1.4} />
              ) : (
                <Plus className="w-4 h-4 text-espresso/70" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-out",
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm md:text-[0.95rem] text-espresso/75 leading-relaxed max-w-prose">
                  {s.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
