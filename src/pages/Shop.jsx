import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || material === 'Hypoallergenic'
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
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, material, price, sort])

  const containerRef = useStrkImages([category, material, price, sort])

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-porcelain pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-[2.25rem] bg-velmora-espresso p-8 text-velmora-pearl shadow-velmora-card sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">The Collection</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
            <h1 className="font-serif text-6xl leading-none text-velmora-pearl sm:text-7xl">Shop demi-fine essentials</h1>
            <p className="text-sm leading-7 text-velmora-porcelain/75">
              Warm 18K gold plated pieces for earrings, necklaces, huggies, and gift-ready sets.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8">
        <aside className="h-fit rounded-[1.75rem] border border-velmora-linen bg-velmora-pearl p-5 text-velmora-espresso shadow-velmora-soft lg:sticky lg:top-28">
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} valueKey="value" labelKey="label" />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-linen pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-velmora-cocoa">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-sm font-semibold text-velmora-espresso">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-linen bg-velmora-pearl px-4 py-2 text-sm text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
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
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-velmora-linen bg-velmora-pearl p-10 text-center text-velmora-espresso">
              <h2 className="font-serif text-3xl">No pieces match those filters.</h2>
              <p className="mt-3 text-sm text-velmora-cocoa">Try adjusting your selection to reveal more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange, valueKey, labelKey }) {
  return (
    <div className="border-b border-velmora-linen py-5 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">{title}</h2>
      <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
        {options.map((option) => {
          const optionValue = valueKey ? option[valueKey] : option
          const optionLabel = labelKey ? option[labelKey] : option
          const active = value === optionValue

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(optionValue)}
              className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition lg:w-full ${
                active
                  ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                  : 'border-velmora-linen bg-transparent text-velmora-espresso hover:border-velmora-champagne hover:text-velmora-bronze'
              }`}
            >
              {optionLabel}
            </button>
          )
        })}
      </div>
    </div>
  )
}
