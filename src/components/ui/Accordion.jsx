import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-stone">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.title} className="border-b border-stone">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="eyebrow text-ink">{item.title}</span>
              <span
                className="text-ink"
                aria-hidden="true"
              >
                {open ? (
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out-soft"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pr-6 text-sm text-ink-soft leading-relaxed">
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
