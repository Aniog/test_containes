import React, { useEffect, useRef, useState } from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "../../lib/utils"

const options = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price · Low to high" },
  { id: "price-desc", label: "Price · High to low" },
  { id: "rating", label: "Top rated" },
  { id: "newest", label: "Newest" },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDocClick = (event) => {
      if (!ref.current) return
      if (!ref.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  const current = options.find((o) => o.id === value) || options[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 border border-ink/15 bg-bone-50 px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-200 hover:border-ink/40"
        aria-expanded={open}
      >
        <span className="text-ink/55">Sort by</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-[220px] border border-ink/10 bg-bone-50 shadow-soft">
          {options.map((option) => {
            const active = option.id === value
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  onChange(option.id)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors duration-200",
                  active ? "text-ink" : "text-ink/70 hover:text-ink"
                )}
              >
                <span>{option.label}</span>
                {active && <Check className="h-4 w-4 text-champagne-700" strokeWidth={1.5} />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
