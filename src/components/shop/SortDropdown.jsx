import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Highest rated' },
  { id: 'name', label: 'Name: A → Z' },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = sortOptions.find((o) => o.id === value) || sortOptions[0]

  useEffect(() => {
    const onDoc = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 border border-hairline hover:border-espresso px-4 py-2.5 text-[11px] uppercase tracking-widest2 font-medium transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-taupe font-normal normal-case tracking-normal text-xs hidden sm:inline">Sort by</span>
        <span>{current.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={1.4} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-56 bg-ivory border border-hairline shadow-soft z-20 py-1"
        >
          {sortOptions.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                role="option"
                aria-selected={opt.id === value}
                onClick={() => {
                  onChange(opt.id)
                  setOpen(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-cream transition-colors ${
                  opt.id === value ? 'text-espresso font-medium' : 'text-espresso-soft'
                }`}
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
