import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "rating-desc", label: "Top rated" },
  { id: "name-asc", label: "Name: A to Z" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
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

  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 px-4 py-2.5 border border-line text-ink hover:border-ink transition-colors font-sans text-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-ink-muted text-xs uppercase tracking-[0.18em]">
          Sort
        </span>
        <span className="text-ink">{current.label}</span>
        <ChevronDown
          strokeWidth={1.5}
          className={`w-4 h-4 text-ink-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 z-20 min-w-[220px] bg-surface border border-line shadow-soft-3"
        >
          {OPTIONS.map((o) => {
            const active = o.id === value;
            return (
              <li key={o.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(o.id);
                    setOpen(false);
                  }}
                  className={[
                    "w-full flex items-center justify-between px-4 py-3 text-left font-sans text-sm transition-colors",
                    active
                      ? "text-ink bg-cream"
                      : "text-ink-muted hover:text-ink hover:bg-cream",
                  ].join(" ")}
                >
                  <span>{o.label}</span>
                  {active && (
                    <Check strokeWidth={1.5} className="w-4 h-4 text-gold" />
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

export { OPTIONS as SORT_OPTIONS };
