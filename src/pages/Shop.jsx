import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import { useStrikinglyImages } from '@/hooks/useStrikinglyImages'
import ProductCard from '@/components/storefront/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Crystal']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const containerRef = useStrikinglyImages([category, material, price, sort])

  const filteredProducts = useMemo(() => {
    const priceOption = priceOptions.find((option) => option.label === price) ?? priceOptions[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= priceOption.min && product.price <= priceOption.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const filterPanel = (
    <aside className="space-y-8 border border-velmora-hairline bg-velmora-porcelain p-6 text-velmora-ink lg:sticky lg:top-28">
      <div>
        <p className="text-xs font-bold uppercase tracking-luxury text-velmora-brass">Category</p>
        <div className="mt-4 space-y-2">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-sm transition ${
                category === option ? 'bg-velmora-ink text-velmora-ivory' : 'text-velmora-muted hover:bg-velmora-champagne hover:text-velmora-ink'
              }`}
            >
              {option}
              <span className="text-xs">
                {option === 'All' ? products.length : products.filter((product) => product.category === option).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-luxury text-velmora-brass">Price</p>
        <div className="mt-4 space-y-2">
          {priceOptions.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => setPrice(option.label)}
              className={`w-full rounded-full px-4 py-3 text-left text-sm transition ${
                price === option.label ? 'bg-velmora-ink text-velmora-ivory' : 'text-velmora-muted hover:bg-velmora-champagne hover:text-velmora-ink'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-luxury text-velmora-brass">Material</p>
        <div className="mt-4 space-y-2">
          {materialOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMaterial(option)}
              className={`w-full rounded-full px-4 py-3 text-left text-sm transition ${
                material === option ? 'bg-velmora-ink text-velmora-ivory' : 'text-velmora-muted hover:bg-velmora-champagne hover:text-velmora-ink'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-16 pt-28 text-velmora-ink sm:pt-32 lg:pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-hairline pb-9">
          <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">The Collection</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serifDisplay text-6xl leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-muted">
                Demi-fine gold jewelry under $120, edited for gifting, daily wear, and quietly luminous nights out.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowMobileFilters((open) => !open)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-hairline bg-velmora-porcelain px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:border-velmora-gold lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="sr-only" htmlFor="sort-products">Sort products</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 rounded-full border border-velmora-hairline bg-velmora-porcelain px-5 text-sm font-semibold text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {showMobileFilters && <div className="mt-6 lg:hidden">{filterPanel}</div>}

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">{filterPanel}</div>
          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-muted">
              <span>{filteredProducts.length} pieces</span>
              <span className="hidden sm:inline">Free worldwide shipping on every order</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-hairline bg-velmora-porcelain p-10 text-center text-velmora-ink">
                <h2 className="font-serifDisplay text-4xl">No pieces found</h2>
                <p className="mt-3 text-sm leading-6 text-velmora-muted">
                  Try a different category, material, or price range to rediscover the collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
