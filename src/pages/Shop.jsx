import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/storefront/ProductCard'
import { products } from '../data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 81, max: 120 },
]

export default function Shop({ onAddToCart, onViewProduct }) {
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
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, priceRange, sort])

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="border-b border-velmora-line px-5 pb-12 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Velmora shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl leading-none text-velmora-espresso sm:text-7xl">The Collection</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-taupe">
                Demi-fine gold jewelry for birthdays, bridesmaids, workdays, and every luminous moment in between.
              </p>
            </div>
            <label className="flex w-full max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-pearl px-5 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-10 lg:py-14">
        <aside className="h-fit border border-velmora-line bg-velmora-pearl p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-line pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-extrabold uppercase tracking-luxury">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={priceRange} onChange={setPriceRange} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-line pb-4 text-sm text-velmora-taupe">
            <span>{visibleProducts.length} pieces</span>
            <span>Premium but accessible · $30–$120</span>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  context="shop"
                  onAddToCart={onAddToCart}
                  onViewProduct={onViewProduct}
                />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-line bg-velmora-pearl p-10 text-center text-velmora-espresso">
              <p className="font-serif text-3xl">No pieces match those filters.</p>
              <p className="mt-3 text-sm text-velmora-taupe">Try widening your edit to see more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-line py-5 last:border-b-0">
      <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">{title}</legend>
      <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 rounded-full border border-velmora-line bg-velmora-ivory px-4 py-2 text-sm text-velmora-espresso transition hover:border-velmora-gold lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="accent-velmora-gold"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
