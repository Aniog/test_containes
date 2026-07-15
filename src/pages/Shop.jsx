import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/products/ProductCard.jsx'
import { categories, products } from '../data/products.js'
import { useImageLoader } from '../lib/useImageLoader.js'

const priceRanges = [
  { label: 'Under $50', test: (price) => price < 50 },
  { label: '$50 – $80', test: (price) => price >= 50 && price <= 80 },
  { label: '$80+', test: (price) => price > 80 },
]

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || product.description.toLowerCase().includes('crystal')
      const range = priceRanges.find((item) => item.label === price)
      const priceMatch = price === 'All' || range?.test(product.price)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, price, material, sort])

  const containerRef = useImageLoader([category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pb-16">
        <div className="border-b border-velmora-linen pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-velmora-mist">
                Demi-fine gold pieces for gifting, stacking, and the rituals that make a day feel considered.
              </p>
            </div>
            <label className="flex items-center gap-3 text-sm text-velmora-mist">
              <span className="font-bold uppercase tracking-[0.22em] text-velmora-ink">Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-linen bg-velmora-pearl px-5 py-3 text-sm text-velmora-ink focus:border-velmora-champagne focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-[17rem_1fr]">
          <aside className="h-fit border border-velmora-linen bg-velmora-pearl p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3 border-b border-velmora-linen pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
              <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-velmora-ink">Filter</h2>
            </div>
            <FilterGroup title="Category" value={category} onChange={setCategory} options={['All', ...categories, 'Gift Sets']} />
            <FilterGroup title="Price" value={price} onChange={setPrice} options={['All', ...priceRanges.map((range) => range.label)]} />
            <FilterGroup title="Material" value={material} onChange={setMaterial} options={['All', '18K Gold Plated', 'Crystal Accent']} />
          </aside>

          <section>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-mist">
              <p>{visibleProducts.length} pieces</p>
              <p className="hidden sm:block">Premium-but-accessible jewelry from $30–$120</p>
            </div>
            {visibleProducts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="border border-velmora-linen bg-velmora-pearl p-10 text-center text-velmora-ink">
                <p className="font-serif text-4xl">No pieces matched those filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('All')
                    setPrice('All')
                    setMaterial('All')
                  }}
                  className="mt-5 rounded-full bg-velmora-champagne px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink"
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

function FilterGroup({ title, value, onChange, options }) {
  return (
    <div className="border-b border-velmora-linen py-5 last:border-b-0">
      <h3 className="mb-4 font-serif text-2xl text-velmora-ink">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mist transition hover:text-velmora-ink">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-champagne"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
