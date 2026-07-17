import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left group"
            >
              <span className="font-sans text-xs font-medium uppercase tracking-luxe text-espresso group-hover:text-bronze transition-colors duration-300">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "h-4 w-4 text-cocoa transition-transform duration-300 ease-luxe shrink-0",
                  isOpen && "rotate-45 text-bronze"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-luxe",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-cocoa max-w-prose">
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
