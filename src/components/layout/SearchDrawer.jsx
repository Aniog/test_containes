import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const SearchDrawer = ({ open, onClose }) => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return products.slice(0, 4)
    }

    return products.filter(
      (product) =>
        product.shortName.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized),
    )
  }, [query])

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-overlay transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-xl border-l border-velmora-line bg-velmora-ivory p-6 text-velmora-ink shadow-soft transition-transform duration-300 ease-luxury sm:p-8 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Search</p>
            <h2 className="mt-2 text-3xl">Find your next signature piece</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-velmora-ink transition-colors hover:border-velmora-accent hover:text-velmora-accent"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <label className="mt-8 flex items-center gap-3 rounded-full border border-velmora-line bg-white/70 px-5 py-4 shadow-soft">
          <Search className="h-4 w-4 text-velmora-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search earrings, necklaces, huggies..."
            className="w-full bg-transparent text-sm text-velmora-ink outline-none placeholder:text-velmora-muted"
          />
        </label>

        <div className="mt-8 space-y-4">
          {results.map((product) => (
            <Link
              key={product.slug}
              to={`/shop/${product.slug}`}
              onClick={onClose}
              className="flex items-center justify-between rounded-3xl border border-velmora-line bg-white/50 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-velmora-accent hover:bg-white"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
                  {product.category}
                </p>
                <p className="mt-2 text-sm uppercase tracking-luxe text-velmora-ink">
                  {product.name}
                </p>
              </div>
              <span className="text-sm text-velmora-muted">{formatPrice(product.price)}</span>
            </Link>
          ))}

          {!results.length ? (
            <div className="rounded-3xl border border-dashed border-velmora-line px-5 py-10 text-center text-sm text-velmora-muted">
              No pieces matched your search.
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  )
}

export default SearchDrawer
