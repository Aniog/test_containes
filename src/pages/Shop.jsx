import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/lib/image'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated', 'Gold Filigree']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const [category, setCategory] = useState(categoryFromUrl || 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useImageLoader([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">The collection</p>
        <div className="mt-4 grid gap-5 border-b border-velmora-sand pb-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h1 id="shop-title" className="font-serif text-6xl font-medium leading-none text-velmora-espresso md:text-8xl">Shop Velmora</h1>
          <p id="shop-desc" className="text-sm leading-7 text-velmora-cocoa/76">
            Demi-fine gold jewelry for self-purchase, modern gifting, and everyday glow from $30 to $120.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-10">
        <aside className="h-fit border border-velmora-sand bg-velmora-porcelain p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
          <h2 className="font-serif text-3xl text-velmora-espresso">Filters</h2>
          <FilterGroup label="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup label="Price" options={priceOptions} value={price} onChange={setPrice} />
          <FilterGroup label="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-sand pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cocoa/75">{filteredProducts.length} refined pieces</p>
            <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cocoa">
              Sort
              <select
                aria-label="Sort products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-sand bg-velmora-porcelain px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-champagne focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-sand bg-velmora-porcelain p-10 text-center text-velmora-espresso shadow-soft">
              <h3 className="font-serif text-4xl">No pieces found</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-cocoa/75">Try a softer filter combination to discover more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="mt-7 border-t border-velmora-sand pt-6">
      <legend className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{label}</legend>
      <div className="mt-4 space-y-3">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value
          return (
            <label key={optionValue} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cocoa/80">
              <span>{optionLabel}</span>
              <input
                type="radio"
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-champagne"
              />
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
