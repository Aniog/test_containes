import { useState } from "react";
import { Plus } from "lucide-react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold tracking-[0.28em] uppercase text-espresso">
          {title}
        </span>
        <Plus
          size={16}
          className={`text-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-cocoa">{children}</div>
        </div>
      </div>
    </div>
  );
}
