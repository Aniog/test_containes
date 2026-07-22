import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E5E0D8]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-[#2C2823] group-hover:text-[#C5A46E] transition-colors">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#9A8F7E] transition-transform duration-200",
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
        <div className="text-[#6B6359] leading-relaxed pr-8">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
