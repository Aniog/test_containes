import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/product/ProductCard.jsx'
import { categories, materials, products } from '../data/products.js'

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const selectedRange = priceRanges.find((range) => range.label === price) || priceRanges[0]
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = product.price >= selectedRange.min && product.price < selectedRange.max
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-asc') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-parchment pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-goldDeep">The collection</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serifDisplay text-6xl font-medium leading-none text-velmora-ink md:text-7xl">Shop Velmora</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-bark">
              Premium-but-accessible demi-fine pieces for self-purchase, gifting, and softly elevated everyday wear.
            </p>
          </div>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-bark">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="min-h-12 border border-velmora-oyster bg-velmora-pearl px-4 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 md:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit border border-velmora-oyster bg-velmora-pearl p-5 text-velmora-ink shadow-soft md:sticky md:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-oyster pb-4">
            <SlidersHorizontal className="h-4 w-4 shrink-0 text-velmora-goldDeep" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Filters</h2>
          </div>
          <div className="grid gap-x-6 sm:grid-cols-3 md:block">
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceRanges.map((range) => range.label)} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-velmora-oyster pb-4 text-sm text-velmora-bark">
            <span>{filteredProducts.length} pieces</span>
            <span>Free shipping worldwide</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-oyster bg-velmora-pearl p-10 text-center text-velmora-bark">
              No pieces match these filters. Try another combination.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-oyster py-5 last:border-b-0 sm:border-b-0 md:border-b md:last:border-b-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-goldDeep">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-velmora-bark">
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="mt-1 h-4 w-4 shrink-0 accent-velmora-goldDeep"
            />
            <span className="min-w-0 break-words">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
