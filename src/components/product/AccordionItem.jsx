import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#1A1816]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.12em] uppercase font-medium">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-[#6E6862] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
