import { Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice, products } from '@/data/products'

export default function SearchDrawer({ isOpen, onClose, query, onQueryChange }) {
  const trimmedQuery = query.trim().toLowerCase()
  const results = trimmedQuery
    ? products.filter((product) => {
        const haystack = `${product.name} ${product.category} ${product.shortDescription}`.toLowerCase()
        return haystack.includes(trimmedQuery)
      })
    : []

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/40 backdrop-blur-sm transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-xl border-l border-velmora-line/20 bg-velmora-cream shadow-velmora transition duration-500 ease-luxe ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        aria-label="Search drawer"
      >
        <div className="border-b border-velmora-line/30 px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Search</p>
              <h2 className="font-serif text-3xl text-velmora-espresso">Discover Velmora</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-velmora-line/40 p-2 text-velmora-espresso transition hover:bg-velmora-champagne"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <label className="mt-5 flex items-center gap-3 rounded-full border border-velmora-line/40 bg-white/70 px-4 py-3">
            <Search className="h-4 w-4 text-velmora-gold" />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search earrings, huggies, necklaces"
              className="w-full bg-transparent text-sm text-velmora-espresso placeholder:text-velmora-espresso/50 focus:outline-none"
            />
          </label>
        </div>

        <div className="h-[calc(100%-170px)] overflow-y-auto px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-velmora-espresso/60">
            <span>{query ? `${results.length} results` : 'Start with a product name'}</span>
            <span>Quiet luxury, everyday ease</span>
          </div>

          <div className="space-y-4">
            {results.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="group flex gap-4 rounded-3xl border border-velmora-line/35 bg-velmora-ivory p-4 transition hover:-translate-y-0.5 hover:border-velmora-gold/60 hover:shadow-soft"
              >
                <img
                  alt={product.name}
                  className="h-28 w-24 rounded-2xl object-cover"
                  data-strk-img-id={`search-${product.slug}`}
                  data-strk-img={`[search-${product.slug}-description] [search-${product.slug}-title] [search-${product.slug}-category]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="320"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p
                      id={`search-${product.slug}-category`}
                      className="text-[0.68rem] uppercase tracking-[0.28em] text-velmora-gold"
                    >
                      {product.category}
                    </p>
                    <h3
                      id={`search-${product.slug}-title`}
                      className="mt-2 font-serif text-lg uppercase tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-gold"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={`search-${product.slug}-description`}
                      className="mt-2 text-sm text-velmora-espresso/70"
                    >
                      {product.shortDescription}
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-medium text-velmora-espresso">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
