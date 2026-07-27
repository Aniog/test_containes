import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = ({ items, idPrefix = "faq" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-surface-200 border-y border-surface-200">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              aria-controls={`${idPrefix}-panel-${i}`}
            >
              <span className="text-[16.5px] font-semibold text-ink-900">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${
                  open ? "rotate-180 text-ink-900" : ""
                }`}
              />
            </button>
            <div
              id={`${idPrefix}-panel-${i}`}
              className={`grid overflow-hidden transition-all duration-200 ${
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-3xl text-[15.5px] leading-relaxed text-ink-600">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
