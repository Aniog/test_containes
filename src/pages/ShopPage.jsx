import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function ShopPage({ onAddToCart }) {
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceMatch =
        filters.price === 'All' ||
        (filters.price === 'Under $50' && product.price < 50) ||
        (filters.price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (filters.price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [filters, sort])

  useImageLoader(containerRef, [filters.category, filters.price, filters.material, sort])

  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink lg:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-ink/10 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">Collection</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink md:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-cocoa">
                Demi-fine gold jewelry for self-purchase, gifting, and the everyday rituals that deserve a little light.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cocoa">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-ink/15 bg-velmora-pearl px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:border-velmora-bronze focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[17rem_1fr]">
          <aside className="rounded-none border border-velmora-ink/10 bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-3 border-b border-velmora-ink/10 pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
              <h2 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-ink">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categories} value={filters.category} onChange={(value) => updateFilter('category', value)} />
            <FilterGroup title="Price" options={prices} value={filters.price} onChange={(value) => updateFilter('price', value)} />
            <FilterGroup title="Material" options={materials} value={filters.material} onChange={(value) => updateFilter('material', value)} />
          </aside>

          <section>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-cocoa">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Premium-but-accessible, $30–$120</p>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="shop-grid" />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="border border-velmora-ink/10 bg-velmora-pearl p-10 text-center text-velmora-ink">
                <p className="font-serif text-3xl">No pieces match those filters.</p>
                <button
                  type="button"
                  onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })}
                  className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze underline underline-offset-8"
                >
                  Reset filters
                </button>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-ink/10 py-5 last:border-b-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{title}</legend>
      <div className="grid gap-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cocoa">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
