import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-stonehair">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-stonehair">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-serif text-lg">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-taupe transition-transform duration-300",
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
              <p className="text-taupe leading-relaxed text-sm">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
