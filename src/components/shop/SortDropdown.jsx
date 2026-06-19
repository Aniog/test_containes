import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const OPTIONS = [
  { value: "featured",    label: "Featured"        },
  { value: "price-asc",   label: "Price: Low to High" },
  { value: "price-desc",  label: "Price: High to Low" },
  { value: "newest",      label: "Newest"          },
  { value: "rating",      label: "Top Rated"       },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = OPTIONS.find((o) => o.value === value) || OPTIONS[0];

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 text-sm text-ink hover:text-gold-dark transition-colors"
      >
        <span className="vm-eyebrow text-ink-muted">Sort</span>
        <span>{current.label}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", open && "rotate-180")} strokeWidth={1.4} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[200px] bg-cream border border-ink/15 shadow-soft z-20"
        >
          {OPTIONS.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => { onChange(o.value); setOpen(false); }}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm transition-colors",
                  o.value === value
                    ? "text-ink font-medium bg-cream-50"
                    : "text-ink-muted hover:text-ink hover:bg-cream-50"
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
