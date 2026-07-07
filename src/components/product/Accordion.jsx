import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[12px] uppercase tracking-editorial text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-muted" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-muted" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-ink/80 leading-relaxed max-w-2xl">
                  {typeof item.content === "string" ? (
                    <p>{item.content}</p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
