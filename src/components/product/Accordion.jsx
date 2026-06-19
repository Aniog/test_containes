import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Accordion({ items = [], initial = 0 }) {
  const [open, setOpen] = useState(initial);

  return (
    <div className="border-t border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-ink/15">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex items-center justify-between w-full py-5 text-left"
            >
              <span className="vm-eyebrow text-ink">{item.title}</span>
              <ChevronDown
                className={cn("w-4 h-4 text-ink-muted transition-transform duration-500 ease-editorial", isOpen ? "rotate-180" : "")}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] text-ink-soft leading-relaxed max-w-2xl space-y-3">
                  {typeof item.content === "string" ? <p>{item.content}</p> : item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
