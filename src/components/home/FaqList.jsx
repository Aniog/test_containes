import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqList = ({ items }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line border border-line rounded-lg bg-white overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between gap-6 text-left px-5 md:px-6 py-5 hover:bg-paper-soft"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base font-semibold text-ink-900">
                {item.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-ink-700 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-5 -mt-1">
                <p className="text-sm md:text-base text-ink-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqList;