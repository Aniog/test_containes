import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
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
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const current = options.find((o) => o.id === value) || options[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-hairline/80 bg-cream-50 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300 hover:border-espresso-300 transition-colors"
        aria-expanded={open}
      >
        Sort: {current.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-64 bg-cream-50 border border-hairline/80 shadow-card z-20 py-1"
        >
          {options.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                role="option"
                aria-selected={o.id === value}
                onClick={() => {
                  onChange(o.id);
                  setOpen(false);
                }}
                className={cn(
                  "w-full text-left flex items-center justify-between px-4 py-2.5 font-sans text-[12px] uppercase tracking-widest2 transition-colors",
                  o.id === value
                    ? "text-gold-500"
                    : "text-espresso-300 hover:text-gold-500",
                )}
              >
                {o.label}
                {o.id === value && (
                  <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
