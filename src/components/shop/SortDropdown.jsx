import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export const SORT_OPTIONS = [
  { id: "featured",  label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc",label: "Price: High to Low" },
  { id: "rating",    label: "Top Rated" },
  { id: "name",      label: "Name: A → Z" },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = SORT_OPTIONS.find((o) => o.id === value) || SORT_OPTIONS[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-3 font-medium text-espresso hover:text-gold-600 transition-colors"
      >
        <span className="text-mocha-400">Sort:</span>
        <span>{current.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-cream border border-taupe-300 shadow-hover z-30 min-w-[200px] py-1 animate-fade-in">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                onChange(opt.id)
                setOpen(false)
              }}
              className={`
                w-full text-left px-4 py-2.5 text-[13px] transition-colors
                ${value === opt.id ? "text-gold-600 bg-taupe-100/60" : "text-espresso hover:bg-taupe-100/40"}
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
