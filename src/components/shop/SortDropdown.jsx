import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "New arrivals" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 border border-line bg-cream px-4 py-2.5 text-sm text-ink hover:border-ink transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-ink-soft text-[11px] tracking-eyebrow uppercase">
          Sort
        </span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-ink-soft transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-30 mt-2 w-56 border border-line bg-cream-soft py-1 shadow-soft"
        >
          {OPTIONS.map((o) => {
            const selected = o.id === value;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(o.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-cream-warm",
                    selected && "text-ink"
                  )}
                >
                  <span>{o.label}</span>
                  {selected && (
                    <Check className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
