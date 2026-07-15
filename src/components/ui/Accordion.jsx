import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function AccordionItem({ title, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;
  return (
    <div className="border-t border-tan/70 last:border-b last:border-b-tan/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left
                   text-ink hover:text-gold-deep transition-colors"
      >
        <span className="eyebrow text-ink">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className={cn(
            "transition-transform duration-300 text-ink",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-mauve text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={item.title}
          id={`acc-${i}`}
          title={item.title}
          defaultOpen={i === defaultOpenIndex}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
