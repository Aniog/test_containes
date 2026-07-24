import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] font-medium uppercase tracking-ui text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className={cn(
            "text-taupe transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-6 text-[15px] leading-relaxed text-ink-soft max-w-prose-luxe">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductAccordion({ description, materials, care, shipping }) {
  return (
    <div>
      <AccordionItem title="Description" defaultOpen>
        {description}
      </AccordionItem>
      <AccordionItem title="Materials & Care">{materials}<br />{care}</AccordionItem>
      <AccordionItem title="Shipping & Returns">{shipping}</AccordionItem>
    </div>
  );
}
