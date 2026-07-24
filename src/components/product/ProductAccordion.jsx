import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ProductAccordion({ sections = [] }) {
  const [open, setOpen] = useState(sections[0]?.key ?? null);
  return (
    <div className="border-t border-hairline">
      {sections.map((s) => {
        const isOpen = open === s.key;
        return (
          <div key={s.key} className="border-b border-hairline">
            <button
              onClick={() => setOpen(isOpen ? null : s.key)}
              className="w-full flex items-center justify-between py-5 sm:py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl text-ink">{s.title}</span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-muted" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-muted" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
                {s.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
