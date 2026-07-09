import { Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products.js'
import { formatPrice } from '@/data/products.js'

const SearchDrawer = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
    }
  }, [isOpen])

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return products.slice(0, 4)
    }

    return products.filter((product) =>
      `${product.name} ${product.category} ${product.material}`
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  return (
    <div
      className={`fixed inset-0 z-[70] transition-all duration-300 ${
        isOpen ? 'pointer-events-auto bg-velvet/35 opacity-100' : 'pointer-events-none bg-transparent opacity-0'
      }`}
      aria-hidden={!isOpen}
      aria-modal={isOpen ? 'true' : undefined}
      inert={isOpen ? undefined : ''}
      role={isOpen ? 'dialog' : undefined}
    >
      <button
        type="button"
        aria-label="Close search overlay"
        className="absolute inset-0 z-0"
        onClick={onClose}
      />
      <div
        className={`relative z-10 ml-auto h-full w-full max-w-xl bg-ivory shadow-soft transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-truffle/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-champagne">Search</p>
            <h2 className="font-editorial text-3xl text-velvet">Find your next favorite</h2>
          </div>
          <button
            type="button"
            aria-label="Close search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-truffle/15 text-truffle transition-colors duration-300 hover:text-velvet"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-truffle" />
            <input
              autoFocus={isOpen}
              className="field-input pl-12"
              placeholder="Search earrings, necklaces, huggies..."
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="space-y-3">
            {results.map((product) => (
              <Link
                key={product.id}
                className="flex items-center justify-between rounded-[2rem] border border-truffle/10 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne/40"
                to={`/product/${product.slug}`}
                onClick={onClose}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-champagne">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-editorial text-2xl uppercase tracking-[0.18em] text-velvet">
                    {product.name}
                  </h3>
                </div>
                <span className="text-sm text-truffle">{formatPrice(product.price)}</span>
              </Link>
            ))}
            {!results.length ? (
              <div className="rounded-[2rem] border border-truffle/10 bg-white px-5 py-8 text-center text-sm text-truffle">
                No pieces match your search yet.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDrawer
