import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="label text-espresso">{title}</span>
        {open ? (
          <Minus size={14} strokeWidth={1.4} className="text-taupe" />
        ) : (
          <Plus size={14} strokeWidth={1.4} className="text-taupe" />
        )}
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out-soft",
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
