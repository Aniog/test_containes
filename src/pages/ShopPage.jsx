import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['All', '18K Gold Plated']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === priceRange) || priceOptions[0]

    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => material === 'All' || product.material === material)
      .filter((product) => product.price >= selectedPrice.min && product.price <= selectedPrice.max)
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price
        if (sort === 'price-high') return b.price - a.price
        if (sort === 'rating') return b.rating - a.rating
        return b.reviewCount - a.reviewCount
      })
  }, [category, material, priceRange, sort])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-espresso sm:pt-32">
      <section className="border-b border-velmora-stone px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
            Collection
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none md:text-8xl">
                Shop Velmora
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink">
                Demi-fine gold jewelry curated for daily rituals, considered gifting, and luminous evenings.
              </p>
            </div>
            <label className="flex w-full items-center gap-3 border border-velmora-stone bg-velmora-cream px-4 py-3 text-sm text-velmora-espresso md:w-64">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-goldDark">Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full bg-transparent text-velmora-espresso outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit border border-velmora-stone bg-velmora-cream p-5 shadow-card lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 border-b border-velmora-stone pb-5">
              <SlidersHorizontal className="h-4 w-4 text-velmora-goldDark" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-espresso">
                Filters
              </h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={priceRange} onChange={setPriceRange} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.22em] text-velmora-goldDark">
              <p>{filteredProducts.length} pieces</p>
              <p>Free worldwide shipping</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-stone bg-velmora-cream p-10 text-center text-velmora-espresso">
                <h3 className="font-serif text-3xl font-semibold">No pieces found</h3>
                <p className="mt-3 text-sm text-velmora-ink">Try softening your filters to reveal more jewelry.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-stone py-5 last:border-b-0 last:pb-0 first:pt-0">
      <h3 className="mb-4 font-serif text-2xl font-semibold text-velmora-espresso">
        {title}
      </h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition ${
              value === option
                ? 'border-velmora-gold bg-velmora-gold text-velmora-cream'
                : 'border-velmora-stone bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'
            }`}
          >
            <span>{option}</span>
            <span className="h-2 w-2 rounded-full bg-current opacity-60" />
          </button>
        ))}
      </div>
    </div>
  )
}
