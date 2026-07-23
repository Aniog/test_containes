import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = [
  { label: 'All', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const items = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === '30-50' && product.price >= 30 && product.price <= 50) ||
        (price === '50-80' && product.price > 50 && product.price <= 80) ||
        (price === '80-120' && product.price > 80 && product.price <= 120)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...items].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-onyx">
      <section className="border-b border-velmora-mist px-5 pb-12 pt-32 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">The Shop</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-onyx md:text-8xl">Demi-fine essentials.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-stone">Explore warm gold jewelry designed for daily wear, meaningful gifting, and personal rituals.</p>
            </div>
            <label className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-stone">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="mt-2 block min-h-12 w-full border border-velmora-mist bg-velmora-ivory px-4 text-sm normal-case tracking-normal text-velmora-onyx focus:outline-none focus:ring-2 focus:ring-velmora-gold md:w-56"
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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit border border-velmora-mist bg-white/40 p-5 text-velmora-onyx shadow-velmora-soft lg:sticky lg:top-24">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-mist pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-onyx">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} isObject />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-mist pb-4 text-sm text-velmora-stone">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium demi-fine · $30–$120</span>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-mist bg-white/40 p-10 text-center text-velmora-onyx">
              <h3 className="font-serif text-3xl">No pieces matched these filters.</h3>
              <p className="mt-3 text-sm text-velmora-stone">Try widening your price range or exploring all categories.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange, isObject = false }) {
  return (
    <fieldset className="border-b border-velmora-mist py-5 last:border-b-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-stone">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const optionValue = isObject ? option.value : option
          const optionLabel = isObject ? option.label : option
          return (
            <label key={optionValue} className="flex items-center gap-3 text-sm text-velmora-onyx">
              <input
                type="radio"
                name={title}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {optionLabel}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
