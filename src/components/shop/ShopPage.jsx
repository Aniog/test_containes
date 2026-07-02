import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function ShopPage({ onAddToCart, onProductSelect }) {
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const matchesPrice = (product) => {
      if (filters.price === 'Under $50') return product.price < 50
      if (filters.price === '$50–$80') return product.price >= 50 && product.price <= 80
      if (filters.price === '$80+') return product.price > 80
      return true
    }

    return products
      .filter((product) => filters.category === 'All' || product.category === filters.category)
      .filter((product) => filters.material === 'All' || product.material === filters.material)
      .filter(matchesPrice)
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price
        if (sort === 'price-high') return b.price - a.price
        if (sort === 'rating') return b.rating - a.rating
        return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
      })
  }, [filters, sort])

  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))

  return (
    <section id="collection" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-espresso/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">The collection</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso md:text-6xl">Shop Velmora</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-mink">A curated edit of demi-fine pieces for self-purchase, gifting, and the kind of daily polish that never feels overdone.</p>
          </div>
          <label className="flex w-full max-w-xs items-center justify-between gap-4 rounded-full border border-velmora-espresso/15 bg-velmora-parchment/70 px-5 py-3 text-sm text-velmora-espresso">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-mink">Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent text-right text-sm font-semibold text-velmora-espresso outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>

        <div className="grid gap-9 lg:grid-cols-[260px_1fr]">
          <aside className="self-start border border-velmora-espresso/10 bg-velmora-parchment/55 p-5 text-velmora-espresso lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" strokeWidth={1.5} />
              <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h3>
            </div>
            <FilterGroup label="Category" options={categoryOptions} value={filters.category} onChange={(value) => updateFilter('category', value)} />
            <FilterGroup label="Price" options={priceOptions} value={filters.price} onChange={(value) => updateFilter('price', value)} />
            <FilterGroup label="Material" options={materialOptions} value={filters.material} onChange={(value) => updateFilter('material', value)} />
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-velmora-mink">
              <p>{filteredProducts.length} pieces</p>
              <p>Premium demi-fine edit</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onSelect={onProductSelect} imageContext="shop-grid" />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-espresso/10 bg-velmora-parchment p-10 text-center text-velmora-espresso">
                <p className="font-serif text-3xl">No pieces match those filters.</p>
                <p className="mt-3 text-sm text-velmora-mink">Try a wider price range or another category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="border-t border-velmora-espresso/10 py-5 first:border-t-0 first:pt-0">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-mink">{label}</p>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-xs font-bold uppercase tracking-[0.16em] transition ${value === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-espresso/12 bg-velmora-ivory/60 text-velmora-espresso hover:border-velmora-champagne hover:text-velmora-champagne'}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
