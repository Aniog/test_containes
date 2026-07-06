import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="border-t border-hairline">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-gold"
            >
              <span className="font-serif text-lg md:text-xl">{item.title}</span>
              <span className="text-warm-gray">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pr-8 text-warm-gray leading-relaxed">
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
