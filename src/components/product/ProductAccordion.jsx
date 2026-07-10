import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="border-t border-sand-200">
      {items.map((it, i) => {
        const open = openIdx === i;
        return (
          <div key={it.title} className="border-b border-sand-200">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="label-cap text-ink-950">{it.title}</span>
              <span className="text-ink-950">
                {open ? <Minus size={14} strokeWidth={1.4} /> : <Plus size={14} strokeWidth={1.4} />}
              </span>
            </button>
            <div
              className={cn(
                "grid editorial-transition",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p
                  id={`accordion-${it.title.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                  className="pb-6 pr-8 text-sm leading-relaxed text-textmute"
                >
                  {it.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
