import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordion({ sections }) {
  const [open, setOpen] = useState(sections[0]?.id || null);
  return (
    <div className="border-t border-espresso/15">
      {sections.map((s) => {
        const isOpen = open === s.id;
        return (
          <div key={s.id} className="border-b border-espresso/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="flex items-center justify-between w-full py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs uppercase tracking-label font-medium text-espresso">
                {s.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-espresso" strokeWidth={1.4} />
              ) : (
                <Plus className="h-4 w-4 text-espresso" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                {typeof s.content === "string" ? (
                  <p className="text-sm text-espresso-soft leading-relaxed max-w-2xl">
                    {s.content}
                  </p>
                ) : (
                  <ul className="text-sm text-espresso-soft space-y-2 leading-relaxed max-w-2xl">
                    {s.content.map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-espresso/30" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
