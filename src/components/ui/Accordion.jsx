import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils.js";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans uppercase tracking-wider2 text-[0.78rem] text-ink">
          {title}
        </span>
        {open ? (
          <Minus size={16} className="text-ink" />
        ) : (
          <Plus size={16} className="text-ink" />
        )}
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="font-sans text-[0.95rem] leading-relaxed text-mute">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultIndex = 0, className }) => (
  <div className={cn("border-t border-ink/10", className)}>
    {items.map((item, i) => (
      <AccordionItem key={item.title} title={item.title} defaultOpen={i === defaultIndex}>
        {item.content}
      </AccordionItem>
    ))}
  </div>
);

export default Accordion;
