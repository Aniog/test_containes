import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { formatPrice, getProductImageUrl, products } from '@/data/products.js?velmora=20260707'
import RatingStars from '@/components/common/RatingStars'
import { cn } from '@/lib/utils'

export default function SearchPanel({ open, onClose }) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) {
      return products.slice(0, 4)
    }

    const normalized = query.trim().toLowerCase()
    return products.filter((product) =>
      [product.name, product.category, product.material, product.description]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  return (
    <div hidden={!open} aria-hidden={!open} className={cn('fixed inset-0 z-50 bg-velmora-noir/40 p-4 transition', open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')}>
      <div className={cn('mx-auto mt-16 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-velmora-parchment p-6 shadow-velvet transition duration-300 md:p-8', open ? 'translate-y-0' : '-translate-y-6')}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="section-eyebrow">Search the collection</p>
            <h2 className="mt-3 font-serif text-3xl text-velmora-noir">Find your next signature piece</h2>
          </div>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-velmora-espresso/10" onClick={onClose} aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>
        <label className="mb-6 flex items-center gap-3 rounded-full border border-velmora-espresso/10 bg-white/80 px-5 py-4">
          <Search className="h-4 w-4 text-velmora-espresso/70" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-transparent text-sm text-velmora-noir outline-none placeholder:text-velmora-espresso/50"
            placeholder="Search earrings, necklaces, huggies..."
          />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((product) => {
            const titleId = `search-${product.id}-title`
            const descId = `search-${product.id}-desc`
            return (
              <Link key={product.id} to={`/product/${product.id}`} onClick={onClose} className="flex gap-4 rounded-[1.5rem] border border-velmora-espresso/10 bg-white/70 p-4 transition hover:border-velmora-gold/50 hover:shadow-card">
                <img
                  alt={product.name}
                  className="h-28 w-24 rounded-[1.25rem] object-cover"
                  data-strk-img-id={`${product.imageIds.primary}-search`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src={getProductImageUrl(product, 'primary')}
                />
                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-luxe text-velmora-espresso/60">{product.category}</p>
                    <h3 id={titleId} className="font-serif text-lg uppercase tracking-luxe text-velmora-noir">{product.name}</h3>
                    <p id={descId} className="text-sm leading-6 text-velmora-espresso/70">{product.shortDescription}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-velmora-noir">{formatPrice(product.price)}</span>
                    <RatingStars rating={product.rating} reviews={product.reviews} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
