import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/storefront/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated', 'Gold Filigree']

export default function Shop({ onAddToCart }) {
  const searchParams = new URLSearchParams(window.location.search)
  const startingCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(startingCategory) ? startingCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-6 lg:px-10">
        <div className="border-b border-velmora-cocoa/10 pb-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">Velmora Shop</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serifDisplay text-6xl font-semibold leading-none md:text-7xl">Demi-fine gold, edited.</h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-velmora-cocoa">
                Explore accessible heirloom pieces for gifting, layering, and everyday polish.
              </p>
            </div>
            <label className="flex min-w-56 flex-col gap-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">
              Sort by
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-cocoa/15 bg-velmora-porcelain px-5 py-3 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-champagne focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-6 md:grid-cols-[260px_1fr] lg:px-10">
        <aside className="h-fit border border-velmora-cocoa/10 bg-velmora-porcelain p-5 text-velmora-espresso md:sticky md:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-cocoa/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-antique" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.18em] text-velmora-taupe">
            {visibleProducts.length} pieces
          </p>
          {visibleProducts.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} scope="shop-grid" onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-cocoa/10 bg-velmora-porcelain px-6 py-16 text-center text-velmora-espresso">
              <h2 className="font-serifDisplay text-4xl font-semibold">No pieces match these filters.</h2>
              <p className="mt-3 font-sans text-sm text-velmora-cocoa">Try another category, price range, or material.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-cocoa/10 py-5 last:border-b-0">
      <h3 className="mb-4 font-serifDisplay text-2xl font-semibold text-velmora-espresso">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => {
          const label = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(optionValue)}
              className={`rounded-full border px-4 py-2 text-left font-sans text-sm transition ${
                value === optionValue
                  ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso'
                  : 'border-velmora-cocoa/12 bg-transparent text-velmora-cocoa hover:border-velmora-champagne hover:text-velmora-espresso'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
