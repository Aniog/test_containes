import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/product/ProductCard.jsx'
import { products } from '../data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = [
  { label: 'All', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materials = ['All', '18K Gold Plated', 'Crystal Accent']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const [min, max] = price === 'all' ? [0, Infinity] : price.split('-').map(Number)
    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => product.price >= min && product.price <= max)
      .filter((product) => {
        if (material === 'All') return true
        if (material === 'Crystal Accent') return product.description.toLowerCase().includes('crystal')
        return product.material === material
      })
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price
        if (sort === 'price-high') return b.price - a.price
        if (sort === 'rating') return b.rating - a.rating
        return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
      })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-porcelain pb-20 pt-28 text-velmora-ink md:pb-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-b border-velmora-ink/10 pb-10 md:flex md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">The shop</p>
            <h1 className="mt-3 font-serif text-6xl font-semibold leading-none md:text-8xl">All Jewelry</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-cocoa md:text-base">
              Demi-fine gold pieces designed for gifting, layering, and everyday polish.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3 md:mt-0">
            <label htmlFor="sort" className="text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">Sort</label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border border-velmora-ink/15 bg-velmora-pearl px-4 py-3 text-sm font-semibold text-velmora-ink focus:border-velmora-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-velmora-ink/10 bg-velmora-pearl p-5 shadow-soft lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-luxe text-velmora-ink">Filter</h2>
            </div>

            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-cocoa">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Premium demi-fine jewelry from $30–$120</p>
            </div>
            <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-ink/10 py-5 first:border-t-0 first:pt-0">
      <legend className="mb-4 font-serif text-2xl font-semibold text-velmora-ink">{title}</legend>
      <div className="grid gap-3">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value
          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-cocoa">
              <input
                type="radio"
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-gold"
              />
              <span>{optionLabel}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
