import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";

const options = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Name: A–Z" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find((o) => o.id === value) || options[0];

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
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso/40 hover:border-espresso pb-1 transition-colors duration-300"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-ink-soft">Sort by</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-3 w-56 bg-ivory border border-sand shadow-soft z-30 py-2"
        >
          {options.map((opt) => {
            const isCurrent = opt.id === value;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isCurrent}
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-4 py-2.5 font-sans text-sm text-left transition-colors duration-200",
                    isCurrent
                      ? "text-espresso bg-champagne/50"
                      : "text-ink-soft hover:text-espresso hover:bg-champagne/30",
                  )}
                >
                  <span>{opt.label}</span>
                  {isCurrent && (
                    <Check className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.6} />
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
