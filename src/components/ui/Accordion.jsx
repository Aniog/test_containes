import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-stone-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-stone-200">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none"
            >
              <span className="font-serif text-lg text-espresso">{item.title}</span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-warm-gray transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              )}
            >
              <div className="text-sm leading-relaxed text-warm-gray">
                {Array.isArray(item.content) ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {item.content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
