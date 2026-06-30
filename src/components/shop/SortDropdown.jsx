import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { id: "featured",  label: "Featured"        },
  { id: "newest",    label: "Newest"          },
  { id: "price-asc", label: "Price: low → high" },
  { id: "price-desc",label: "Price: high → low" },
  { id: "top-rated", label: "Top rated"       },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = SORT_OPTIONS.find((o) => o.id === value) || SORT_OPTIONS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-hairline text-[12px] uppercase tracking-[0.22em] text-espresso-900 hover:border-espresso-500 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-espresso-500">Sort:</span>
        <span className="font-medium">{current.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Sort products"
          className="absolute right-0 mt-2 w-64 bg-ivory-50 border border-hairline shadow-card z-20 py-2"
        >
          {SORT_OPTIONS.map((opt) => {
            const selected = opt.id === value;
            return (
              <li key={opt.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors",
                    selected ? "text-espresso-900" : "text-espresso-700 hover:text-espresso-900"
                  )}
                >
                  <span>{opt.label}</span>
                  {selected && <Check size={14} strokeWidth={1.5} className="text-gold-400" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
