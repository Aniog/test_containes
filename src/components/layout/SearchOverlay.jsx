import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { PRODUCTS, formatPrice } from '@/data/products'

export default function SearchOverlay() {
  const { isSearchOpen, setSearchOpen } = useCart()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('')
      const t = setTimeout(() => inputRef.current?.focus(), 80)
      document.body.style.overflow = 'hidden'
      return () => {
        clearTimeout(t)
        document.body.style.overflow = ''
      }
    }
  }, [isSearchOpen])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setSearchOpen])

  if (!isSearchOpen) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      )
    : PRODUCTS

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search">
      <div className="anim-fade-in absolute inset-0 bg-espresso/50 backdrop-blur-[2px]" onClick={() => setSearchOpen(false)} />
      <div className="anim-slide-up absolute inset-x-0 top-0 bg-ivory shadow-2xl">
        <div className="mx-auto max-w-3xl px-5 py-8 md:px-8 md:py-12">
          <div className="flex items-center gap-3 border-b border-espresso/20 pb-4">
            <Search className="h-5 w-5 text-gold" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces…"
              className="w-full bg-transparent font-display text-2xl font-light text-espresso placeholder:text-taupe focus:outline-none md:text-3xl"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="p-1 text-mocha transition-colors hover:text-espresso"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[55vh] overflow-y-auto">
            <p className="pt-5 text-[10px] font-medium uppercase tracking-[0.28em] text-taupe">
              {q ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Popular pieces'}
            </p>
            {results.length === 0 ? (
              <p className="py-8 text-sm text-mocha">
                Nothing found for &ldquo;{query}&rdquo;. Try &ldquo;huggies&rdquo; or &ldquo;necklace&rdquo;.
              </p>
            ) : (
              <ul className="divide-y divide-line">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      onClick={() => setSearchOpen(false)}
                      className="group flex items-center justify-between py-4"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-colors group-hover:text-gold-deep">
                          {p.name}
                        </p>
                        <p className="mt-1 text-xs text-mocha">{p.tagline}</p>
                      </div>
                      <span className="text-sm font-medium text-cocoa">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
