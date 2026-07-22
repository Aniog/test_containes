import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  const current = SORT_OPTIONS.find((o) => o.id === value) || SORT_OPTIONS[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso-800 hover:text-gold-500 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-ink-muted">Sort by</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform",
            open && "rotate-180"
          )}
          strokeWidth={1.6}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-3 w-56 bg-cream-50 border border-espresso-800/10 shadow-soft z-20 py-2 animate-fadeIn"
        >
          {SORT_OPTIONS.map((opt) => (
            <li key={opt.id} role="option" aria-selected={opt.id === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.id)
                  setOpen(false)
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-cream-100 transition-colors",
                  opt.id === value ? "text-espresso-800 font-medium" : "text-ink-muted"
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
