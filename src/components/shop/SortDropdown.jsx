import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "best", label: "Bestselling" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "newest", label: "Newest" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-3 font-sans font-medium text-ink border-b border-ink/40 pb-1"
      >
        <span className="text-muted">Sort:</span>
        <span>{current.label}</span>
        <ChevronDown
          strokeWidth={1.5}
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <ul className="absolute right-0 top-full mt-3 w-56 bg-cream border border-line shadow-soft z-20">
          {OPTIONS.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.id);
                  setOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm font-sans font-light flex items-center justify-between hover:bg-ivory transition-colors",
                  value === o.id ? "text-ink" : "text-ink-soft"
                )}
              >
                {o.label}
                {value === o.id && (
                  <Check strokeWidth={1.5} className="w-3.5 h-3.5 text-gold-deep" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
