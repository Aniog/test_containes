import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items = [], defaultIndex = 0, className = "" }) {
  const [open, setOpen] = useState(defaultIndex);

  return (
    <div className={cn("border-t border-onyx-800/15", className)}>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.title} className="border-b border-onyx-800/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800">
                {it.title}
              </span>
              <Plus
                size={18}
                strokeWidth={1.2}
                className={cn(
                  "text-onyx-800 transition-transform duration-300",
                  isOpen ? "rotate-45" : "rotate-0",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] leading-[1.75] text-mocha-600 max-w-[60ch]">
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
