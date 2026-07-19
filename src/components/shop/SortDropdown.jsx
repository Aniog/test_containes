import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Name" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink hover:text-gold-deep transition-colors duration-300"
        aria-expanded={open}
      >
        Sort: <span className="font-medium">{current.label}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.25}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-3 w-56 bg-bone border border-line shadow-card z-30 py-2">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => {
                onChange(o.id);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-cream transition-colors",
                value === o.id ? "text-ink" : "text-ink/70",
              )}
            >
              {o.label}
              {value === o.id && (
                <Check className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
