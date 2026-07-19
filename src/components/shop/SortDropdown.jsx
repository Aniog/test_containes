import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = SORTS.find((s) => s.id === value) || SORTS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border border-hairline px-4 py-2.5 hover:border-espresso transition-colors"
      >
        <span className="text-taupe">Sort:</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <ul className="absolute right-0 top-full mt-2 z-30 bg-ivory border border-hairline shadow-soft min-w-[220px] py-2">
          {SORTS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(s.id);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left hover:bg-sand transition-colors",
                  s.id === value ? "text-espresso" : "text-espresso/70"
                )}
              >
                {s.label}
                {s.id === value && (
                  <Check className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
