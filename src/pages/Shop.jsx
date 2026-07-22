import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { categories, products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const priceFilters = [
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]

const materialFilters = ['18K Gold Plated', 'Crystal', 'Gift Set']

function priceMatches(product, price) {
  if (price === 'under-50') return product.price < 50
  if (price === '50-80') return product.price >= 50 && product.price <= 80
  if (price === '80-120') return product.price >= 80 && product.price <= 120
  return true
}

function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = price === 'All' || priceMatches(product, price)
      const matchesMaterial = material === 'All' || product.material === material
      return matchesCategory && matchesPrice && matchesMaterial
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, price, material, sort])

  const FilterPanel = () => (
    <div className="space-y-8 text-velmora-umber">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-luxe text-velmora-antique">Category</h2>
        <div className="mt-4 space-y-3">
          {['All', ...categories, 'Sets'].map((item) => (
            <label key={item} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cocoa">
              <span>{item}</span>
              <input
                type="radio"
                name="category"
                checked={category === item}
                onChange={() => setCategory(item)}
                className="h-4 w-4 accent-velmora-antique"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-linen pt-8">
        <h2 className="text-xs font-bold uppercase tracking-luxe text-velmora-antique">Price</h2>
        <div className="mt-4 space-y-3">
          {[{ label: 'All', value: 'All' }, ...priceFilters].map((item) => (
            <label key={item.value} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cocoa">
              <span>{item.label}</span>
              <input
                type="radio"
                name="price"
                checked={price === item.value}
                onChange={() => setPrice(item.value)}
                className="h-4 w-4 accent-velmora-antique"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-linen pt-8">
        <h2 className="text-xs font-bold uppercase tracking-luxe text-velmora-antique">Material</h2>
        <div className="mt-4 space-y-3">
          {['All', ...materialFilters].map((item) => (
            <label key={item} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cocoa">
              <span>{item}</span>
              <input
                type="radio"
                name="material"
                checked={material === item}
                onChange={() => setMaterial(item)}
                className="h-4 w-4 accent-velmora-antique"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-umber">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-14">
        <div className="grid gap-6 border-b border-velmora-linen pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-antique">The shop</p>
            <h1 className="mt-4 font-serif text-6xl font-medium leading-none text-velmora-umber md:text-8xl">Refined everyday gold</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-cocoa md:text-lg">
              Demi-fine earrings, necklaces, huggies, and gift-ready sets designed for soft shine and effortless wear.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen((value) => !value)}
              className="inline-flex items-center gap-2 border border-velmora-linen px-4 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-umber transition hover:border-velmora-champagne lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="sr-only" htmlFor="sort-products">Sort products</label>
            <select
              id="sort-products"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border border-velmora-linen bg-velmora-ivory px-4 py-3 text-sm text-velmora-umber"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[260px_1fr]">
        <aside className="hidden self-start border border-velmora-linen bg-velmora-pearl p-6 lg:block lg:sticky lg:top-28">
          <FilterPanel />
        </aside>

        <div className={`border border-velmora-linen bg-velmora-pearl p-5 lg:hidden ${filtersOpen ? 'block' : 'hidden'}`}>
          <FilterPanel />
        </div>

        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-velmora-cocoa">
            <p>{visibleProducts.length} pieces</p>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPrice('All')
                setMaterial('All')
              }}
              className="font-semibold uppercase tracking-luxe text-velmora-antique transition hover:text-velmora-obsidian"
            >
              Clear filters
            </button>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} scope="shop-grid" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-pearl p-10 text-center text-velmora-umber">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <p className="mt-3 text-sm leading-7 text-velmora-cocoa">Try clearing one selection to return to the full Velmora edit.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Shop
