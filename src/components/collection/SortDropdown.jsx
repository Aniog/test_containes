import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  { id: "featured", label: "Featured" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const selected = options.find((o) => o.id === value) ?? options[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2.5 label text-espresso border border-hairline px-4 py-2.5 hover:border-espresso transition-colors"
      >
        <span className="text-taupe font-normal normal-case tracking-normal text-[11px]">Sort by:</span>
        {selected.label}
        <ChevronDown
          size={12}
          strokeWidth={1.4}
          className={cn("text-taupe transition-transform", open ? "rotate-180" : "")}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-30 bg-ivory border border-hairline shadow-soft min-w-[220px] py-1.5 animate-fade-in-soft">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => {
                onChange(o.id);
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center justify-between px-4 py-2.5 text-sm text-espresso hover:bg-bone transition-colors text-left",
                o.id === value && "text-brass"
              )}
            >
              {o.label}
              {o.id === value && <Check size={12} strokeWidth={1.6} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
