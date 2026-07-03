import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'Newest' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
]

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('mousedown', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink-900 border-b border-ink-900/30 pb-1.5 hover:border-ink-900"
      >
        <span className="text-ink-500 mr-1">Sort:</span>
        {current.label}
        <ChevronDown
          className={cn('w-3.5 h-3.5 transition-transform', open && 'rotate-180')}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-30 mt-2 min-w-[220px] bg-ivory-50 border border-ink-900/15 shadow-soft py-1"
        >
          {OPTIONS.map((o) => {
            const active = o.id === value
            return (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.id)
                    setOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center justify-between gap-3 px-4 py-2.5 text-[13px] hover:bg-ivory-100',
                    active ? 'text-ink-900' : 'text-ink-700',
                  )}
                >
                  {o.label}
                  {active && <Check className="w-3.5 h-3.5 text-ink-900" strokeWidth={1.5} />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { OPTIONS as SORT_OPTIONS }
