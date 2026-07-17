import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { formatPrice, products } from '@/data/store'
import { cn } from '@/lib/utils'

const SearchPanel = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
    }
  }, [isOpen])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      return products.slice(0, 3)
    }

    return products.filter((product) => {
      const haystack = [product.name, product.category, product.material]
        .join(' ')
        .toLowerCase()
      return haystack.includes(normalized)
    })
  }, [query])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] transition-all duration-300',
        isOpen ? 'visible' : 'invisible pointer-events-none',
      )}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={cn(
          'absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        aria-label="Close search"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute inset-x-0 top-0 mx-auto max-w-3xl px-4 pt-5 transition-all duration-500 ease-luxe md:px-8',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0',
        )}
      >
        <div className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-5 shadow-soft md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Search
              </p>
              <h2 className="font-heading text-3xl text-velmora-ink">Find your next favorite</h2>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-ink/10"
              aria-label="Close search"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <label className="relative block">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-ink/45" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="field-input pl-12"
              placeholder="Search earrings, necklaces, or huggies"
            />
          </label>

          <div className="mt-6 space-y-3">
            {results.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="flex items-center justify-between rounded-[1.5rem] border border-velmora-sand/70 bg-velmora-mist px-5 py-4 transition-colors hover:border-velmora-gold"
              >
                <div>
                  <p className="font-heading text-2xl uppercase tracking-product text-velmora-ink">
                    {product.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-velmora-ink/55">
                    {product.category}
                  </p>
                </div>
                <span className="text-sm font-medium text-velmora-ink">
                  {formatPrice(product.price)}
                </span>
              </Link>
            ))}
            {results.length === 0 ? (
              <p className="rounded-[1.5rem] border border-velmora-sand/70 bg-velmora-mist px-5 py-6 text-sm text-velmora-ink/65">
                No pieces found for “{query}”.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPanel
