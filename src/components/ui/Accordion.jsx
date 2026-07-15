import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="border-t border-velmora-sand">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="border-b border-velmora-sand">
            <button
              className="flex w-full items-center justify-between py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-velmora-taupe transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-velmora-charcoal/80 leading-relaxed text-sm">
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
