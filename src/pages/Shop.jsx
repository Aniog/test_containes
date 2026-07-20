import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/lib/useStrkImages.js'

const filterGroups = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  price: ['All', 'Under $50', '$50–$80', '$80+'],
  material: ['All', '18K Gold Plated', 'Gold Vermeil'],
}

export default function Shop({ onAddToCart }) {
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' })
  const [sort, setSort] = useState('Featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useStrkImages([filters.category, filters.price, filters.material, sort])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceMatch = filters.price === 'All'
        || (filters.price === 'Under $50' && product.price < 50)
        || (filters.price === '$50–$80' && product.price >= 50 && product.price <= 80)
        || (filters.price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'Price low to high') return a.price - b.price
      if (sort === 'Price high to low') return b.price - a.price
      if (sort === 'Top rated') return b.rating - a.rating
      return 0
    })
  }, [filters, sort])

  const updateFilter = (group, value) => setFilters((current) => ({ ...current, [group]: value }))

  const FilterSidebar = ({ className = '' }) => (
    <aside className={`border border-velmora-linen bg-velmora-ivory p-5 text-velmora-espresso shadow-soft ${className}`}>
      <div className="mb-6 flex items-center justify-between border-b border-velmora-linen pb-4">
        <h2 className="font-serif text-3xl font-semibold">Filter</h2>
        <SlidersHorizontal className="h-5 w-5 text-velmora-champagne" />
      </div>
      <div className="space-y-7">
        {Object.entries(filterGroups).map(([group, options]) => (
          <div key={group}>
            <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-rose">{group}</h3>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => updateFilter(group, option)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition ${filters[group] === option ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-linen bg-velmora-parchment text-velmora-espresso hover:border-velmora-champagne'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )

  return (
    <main ref={containerRef} className="px-4 pb-16 pt-28 text-velmora-ink sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 border-b border-velmora-linen pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Shop Velmora</p>
            <h1 className="mt-3 font-serif text-6xl font-semibold leading-none text-velmora-espresso sm:text-7xl">Demi-fine essentials</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink/76">
              Warm gold finishes, refined silhouettes, and giftable pieces designed for premium everyday wear.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-linen bg-velmora-ivory px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-velmora-espresso lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <label className="sr-only" htmlFor="sort-products">Sort products</label>
            <select id="sort-products" value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-linen bg-velmora-ivory px-5 py-3 text-sm font-semibold text-velmora-espresso shadow-soft focus:border-velmora-champagne focus:outline-none">
              {['Featured', 'Price low to high', 'Price high to low', 'Top rated'].map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>

        {mobileFiltersOpen && <FilterSidebar className="mb-6 lg:hidden" />}

        <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
          <FilterSidebar className="hidden self-start lg:block lg:sticky lg:top-28" />
          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-ink/75">
              <span>{filteredProducts.length} pieces</span>
              <span className="hidden sm:inline">Premium-but-accessible $30–$120</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddToCart} context="shop" />)}
              </div>
            ) : (
              <div className="border border-velmora-linen bg-velmora-ivory p-10 text-center text-velmora-espresso shadow-soft">
                <p className="font-serif text-3xl font-semibold">No pieces matched.</p>
                <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Try a different category, price, or material filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
