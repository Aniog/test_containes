import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/store/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['All', '18K Gold Plated', 'Crystal', 'Textured Gold']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 999 },
]

export default function CollectionPage({ onAddToCart, onOpenProduct }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === priceRange) || priceOptions[0]

    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = product.price >= selectedPrice.min && product.price <= selectedPrice.max
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, priceRange, sort])

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="border-b border-velmora-taupe/25 pb-6">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const label = typeof option === 'string' ? option : option.label
          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange(label)}
              className={`block w-full bg-transparent px-0 py-2 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${value === label ? 'font-bold text-velmora-gold' : 'text-velmora-cocoa/80 hover:text-velmora-espresso'}`}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section className="border-b border-velmora-taupe/25 px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop all</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-velmora-espresso md:text-7xl">The Velmora Collection</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa/78">
                Demi-fine gold jewelry designed for daily radiance, thoughtful gifting, and effortless layering.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort-products" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Sort</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-h-12 border border-velmora-taupe/35 bg-velmora-porcelain px-4 text-sm font-semibold text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </div>
            <div className="grid gap-6 rounded-none border border-velmora-taupe/25 bg-velmora-porcelain p-6 text-velmora-espresso sm:grid-cols-3 lg:grid-cols-1">
              <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
              <FilterGroup title="Price" options={priceOptions} value={priceRange} onChange={setPriceRange} />
              <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
            </div>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between border-b border-velmora-taupe/25 pb-4">
              <p className="text-sm text-velmora-cocoa/75">Showing {visibleProducts.length} of {products.length} pieces</p>
              <p className="hidden text-xs font-bold uppercase tracking-[0.2em] text-velmora-gold sm:block">Free worldwide shipping</p>
            </div>
            {visibleProducts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={onAddToCart} onOpen={onOpenProduct} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-taupe/25 bg-velmora-porcelain px-6 py-16 text-center text-velmora-espresso">
                <h2 className="font-serif text-3xl">No pieces match these filters.</h2>
                <p className="mt-3 text-sm text-velmora-cocoa/75">Adjust your selections to rediscover the full collection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
