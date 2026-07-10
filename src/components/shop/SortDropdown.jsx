import { useState, useRef, useEffect } from "react"
import { ChevronDownIcon } from "../ui/Icons.jsx"
import { cn } from "../../lib/utils.js"

const options = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
  { id: "rating", label: "Top Rated" },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = options.find((o) => o.id === value) || options[0]

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase text-ink border border-hairline px-4 py-2.5 hover:border-ink/40 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        Sort: <span className="text-muted">{current.label}</span>
        <ChevronDownIcon
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-56 bg-ivory border border-hairline shadow-lift z-20 py-1"
        >
          {options.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.id)
                  setOpen(false)
                }}
                className={cn(
                  "w-full text-left px-4 py-2.5 text-[12px] tracking-wide",
                  o.id === value
                    ? "bg-ivory-soft text-ink"
                    : "text-ink/75 hover:bg-ivory-soft hover:text-ink",
                )}
                role="option"
                aria-selected={o.id === value}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
