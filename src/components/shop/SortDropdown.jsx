import { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"

const SORTS = [
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
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  const current = SORTS.find((s) => s.id === value) || SORTS[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 border border-hairline px-4 py-2.5 text-[12px] uppercase tracking-wider text-ink hover:border-ink transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-muted">Sort:</span>
        <span>{current.label}</span>
        <ChevronDown size={14} strokeWidth={1.5} className={["transition-transform", open ? "rotate-180" : ""].join(" ")} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-60 bg-cream border border-hairline shadow-xl z-30"
        >
          {SORTS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(s.id)
                  setOpen(false)
                }}
                className={[
                  "w-full text-left px-4 py-3 text-[13px] flex items-center justify-between hover:bg-paper",
                  s.id === value ? "text-ink" : "text-muted",
                ].join(" ")}
              >
                {s.label}
                {s.id === value && <Check size={14} strokeWidth={1.5} className="text-gold" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
