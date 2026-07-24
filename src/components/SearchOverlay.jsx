import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Search, X } from 'lucide-react'
import { PRODUCTS, formatPrice } from '@/data/products'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      const t = window.setTimeout(() => inputRef.current?.focus(), 80)
      return () => window.clearTimeout(t)
    }
    return undefined
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q)
      )
    : PRODUCTS

  const go = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      <div className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative mt-20 w-[92%] max-w-xl animate-fade-up bg-cream shadow-[0_40px_90px_-30px_rgba(34,27,20,0.5)]">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Search className="h-5 w-5 text-ink-muted" strokeWidth={1.5} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search earrings, necklaces, huggies…"
            className="h-10 flex-1 bg-transparent font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none"
            aria-label="Search products"
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center text-ink hover:text-gold-deep"
            aria-label="Close search"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto">
          {results.length === 0 && (
            <li className="px-5 py-8 text-center text-sm text-ink-muted">
              No pieces match “{query}” — try “earrings” or “gold”.
            </li>
          )}
          {results.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => go(`/product/${p.id}`)}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sand"
              >
                <span>
                  <span className="block font-serif text-base uppercase tracking-[0.12em] text-ink">
                    {p.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {p.categoryLabel}
                  </span>
                </span>
                <span className="flex items-center gap-3 text-sm font-semibold text-ink">
                  {formatPrice(p.price)}
                  <ArrowRight className="h-4 w-4 text-gold-deep opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => go('/shop')}
          className="flex w-full items-center justify-center gap-2 border-t border-line px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep transition-colors hover:bg-sand"
        >
          View all pieces
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
