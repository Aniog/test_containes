import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="border-t border-hairline">
      {items.map((it, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={it.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[13px] uppercase tracking-widest-2 text-ink font-medium">
                {it.title}
              </span>
              <Plus
                className={cn(
                  "w-4 h-4 text-ink-muted transition-transform duration-300",
                  isOpen ? "rotate-45" : "rotate-0"
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[15px] leading-[1.8] text-ink-muted font-sans font-light max-w-prose">
                  {it.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
