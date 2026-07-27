import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="divide-y divide-brand-line rounded-lg border border-brand-line bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-brand-ink">
                {item.question}
              </span>
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-line text-brand-primary">
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-sm leading-relaxed text-brand-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
