import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = SORT_OPTIONS.find((o) => o.value === value) || SORT_OPTIONS[0];

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center justify-between gap-3 h-10 px-4 min-w-[200px]
                   border border-ink/20 bg-ivory text-ink text-[12px] uppercase tracking-nav
                   hover:border-ink transition-colors"
      >
        <span className="text-[11px] text-mauve normal-case tracking-wide font-sans">
          Sort: <span className="text-ink">{current.label}</span>
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={cn(
            "transition-transform duration-300 text-ink",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-full bg-ivory border border-ink/15 shadow-soft z-30"
        >
          {SORT_OPTIONS.map((opt) => (
            <li key={opt.value} role="option" aria-selected={opt.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 text-left text-sm",
                  "hover:bg-cream transition-colors",
                  opt.value === value ? "text-ink font-medium" : "text-mauve"
                )}
              >
                <span>{opt.label}</span>
                {opt.value === value && (
                  <Check size={14} strokeWidth={1.6} className="text-gold-deep" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
