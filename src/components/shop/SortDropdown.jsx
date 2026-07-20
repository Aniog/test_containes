import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OPTIONS = [
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
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-espresso/80 hover:text-espresso transition-colors border-b border-espresso/30 pb-1.5"
        aria-expanded={open}
      >
        <span className="text-espresso/55">Sort:</span>
        <span className="text-espresso">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.4}
        />
      </button>

      {open && (
        <div className="absolute right-0 sm:left-0 top-full mt-3 z-30 bg-bone border border-sand shadow-soft min-w-[220px] py-2">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => {
                onChange(o.id);
                setOpen(false);
              }}
              className={`block w-full text-left px-5 py-2.5 text-sm transition-colors ${
                o.id === value
                  ? "text-espresso bg-sand/40"
                  : "text-espresso/75 hover:bg-sand/40"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
