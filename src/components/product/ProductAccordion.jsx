import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/cn.js";

// A clean editorial accordion. Only one panel is open at a time.
export default function ProductAccordion({ sections = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink-800 border-y border-ink-800">
      {sections.map((s, idx) => {
        const isOpen = open === idx;
        return (
          <div key={s.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-ink-100">
                {s.title}
              </span>
              {isOpen ? (
                <Minus size={14} strokeWidth={1.6} className="text-gold-300" />
              ) : (
                <Plus size={14} strokeWidth={1.6} className="text-gold-300" />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                {s.title === "Description" ? (
                  <p className="max-w-prose font-sans text-[14px] leading-relaxed text-ink-300">
                    {s.body}
                  </p>
                ) : (
                  <ul className="space-y-2.5">
                    {s.body.map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-sans text-[14px] leading-relaxed text-ink-300"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-gold-400"
                        />
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
