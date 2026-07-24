import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductAccordion({ sections }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="border-t border-ink-800/10">
      {sections.map((s, i) => {
        const open = i === openIdx;
        return (
          <div key={s.title} className="border-b border-ink-800/10">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-sans uppercase tracking-widest2 text-[11px] text-ink-800">
                {s.title}
              </span>
              {open ? (
                <Minus className="h-4 w-4 text-ink-800" />
              ) : (
                <Plus className="h-4 w-4 text-ink-800" />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-luxe",
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-ink-600 text-pretty">
                {typeof s.body === "string" ? <p>{s.body}</p> : s.body}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
