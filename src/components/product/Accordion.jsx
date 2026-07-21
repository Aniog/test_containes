import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-noir">
          {title}
        </span>
        <Plus
          size={15}
          strokeWidth={1.5}
          className={cn(
            "text-noir transition-transform duration-300",
            open && "rotate-45"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-sm leading-relaxed text-taupe">{children}</div>
        </div>
      </div>
    </div>
  );
}
