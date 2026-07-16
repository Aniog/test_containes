import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price >= 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...nextProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const filters = (
    <div className="space-y-8 text-velmora-ink">
      <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
      <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
    </div>
  )

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-sand/60 px-5 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">The collection</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 id="shop-page-title" className="font-serif text-6xl leading-none text-velmora-ink md:text-7xl">Shop Velmora</h1>
              <p id="shop-page-subtitle" className="mt-5 max-w-2xl text-sm leading-7 text-velmora-espresso/70">
                Demi-fine gold earrings, necklaces, and huggies designed to make daily styling feel quietly special.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFiltersOpen((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-velmora-sand bg-white/55 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="sr-only" htmlFor="sort-products">Sort products</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-sand bg-white/70 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne/25"
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

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[17rem_1fr] md:py-14">
        <aside className="hidden rounded-[1.75rem] border border-velmora-sand/60 bg-white/45 p-6 md:block">
          {filters}
        </aside>

        {filtersOpen && (
          <aside className="rounded-[1.5rem] border border-velmora-sand/60 bg-white/70 p-5 shadow-[0_20px_60px_rgba(42,31,26,0.08)] md:hidden">
            {filters}
          </aside>
        )}

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-velmora-sand/60 pb-4 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium demi-fine</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  sectionId="shop-page-title"
                  imageContext="shop-card"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-sand/60 bg-white/55 p-10 text-center text-velmora-ink">
              <h2 className="font-serif text-4xl">No pieces found</h2>
              <p className="mt-3 text-sm leading-7 text-velmora-espresso/70">Try changing your filters to discover more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-bronze">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value
          return (
            <label key={optionValue} className="flex cursor-pointer items-center justify-between gap-4 rounded-full border border-velmora-sand/60 bg-velmora-ivory px-4 py-3 text-sm text-velmora-ink transition-colors hover:border-velmora-champagne">
              <span>{optionLabel}</span>
              <input
                type="radio"
                name={title}
                value={optionValue}
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
