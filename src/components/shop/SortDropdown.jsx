import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { sortOptions } from "@/data/products";
import { cn } from "@/lib/utils";

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = sortOptions.find((o) => o.id === value) || sortOptions[0];

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 font-medium text-ink hover:text-gold transition-colors"
      >
        Sort: <span className="font-normal normal-case tracking-normal">{current.label}</span>
        <ChevronDown
          className={cn("w-4 h-4 transition-transform duration-300", open && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[220px] bg-ivory border border-hairline z-20 py-2"
        >
          {sortOptions.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                role="option"
                aria-selected={opt.id === value}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between text-left px-4 py-2.5 text-sm text-ink hover:bg-ivory-soft transition-colors"
              >
                <span>{opt.label}</span>
                {opt.id === value && <Check className="w-4 h-4 text-gold" strokeWidth={1.5} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
