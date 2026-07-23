import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-taupe">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-taupe">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-serif text-lg md:text-xl text-espresso">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-stone transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-luxury",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-base text-stone leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
