import { Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../lib/format.js'
import { products } from '../../lib/store-data.js'

function SearchDrawer({ open, onClose }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return products.slice(0, 3)
    }

    return products.filter((product) =>
      [product.name, product.category, product.collection]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [query])

  return (
    <div className={`fixed inset-0 z-[60] transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-espresso/50 transition duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close search"
      />
      <aside className={`absolute inset-x-0 top-0 border-b border-velmora-line bg-velmora-mist shadow-soft transition duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
        <div className="page-shell py-6 sm:py-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-overline text-velmora-taupe">Search the collection</p>
              <h2 className="font-display text-3xl text-velmora-espresso">Find your next keepsake</h2>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-line"
              onClick={onClose}
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <label className="flex items-center gap-3 rounded-full border border-velmora-line bg-white px-5 py-3 shadow-card">
            <Search className="h-4 w-4 text-velmora-taupe" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search earrings, necklaces, gift sets..."
              className="w-full border-0 bg-transparent text-sm text-velmora-espresso placeholder:text-velmora-taupe focus:outline-none"
            />
          </label>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {results.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="rounded-panel border border-velmora-line bg-white p-4 transition hover:-translate-y-1 hover:shadow-card"
              >
                <p className="text-xs uppercase tracking-overline text-velmora-taupe">{product.category}</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-product text-velmora-espresso">
                  {product.name}
                </h3>
                <div className="mt-3 flex items-center justify-between text-sm text-velmora-ink">
                  <span>{product.collection}</span>
                  <span className="font-medium text-velmora-espresso">{formatCurrency(product.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SearchDrawer
