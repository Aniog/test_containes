import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import { products } from '@/data/products.js'

const defaultFilters = { category: 'All', price: 'All', material: 'All' }

function matchesPrice(product, price) {
  if (price === 'Under $50') return product.price < 50
  if (price === '$50–$80') return product.price >= 50 && product.price <= 80
  if (price === '$80–$120') return product.price >= 80 && product.price <= 120
  return true
}

export default function Shop({ onAdd }) {
  const [filters, setFilters] = useState(defaultFilters)
  const [sort, setSort] = useState('Featured')
  const [mobileFilters, setMobileFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      return categoryMatch && materialMatch && matchesPrice(product, filters.price)
    })

    if (sort === 'Price: Low to High') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [filters, sort])

  const handleFilterChange = (key, value) => setFilters((current) => ({ ...current, [key]: value }))

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-[1500px] px-5 pb-10 pt-8 sm:px-8 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Velmora Shop</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 id="shop-page-title" className="font-serif text-5xl font-medium leading-tight text-velmora-espresso md:text-7xl">Demi-fine gold, curated for every day.</h1>
            <p id="shop-page-copy" className="mt-5 max-w-2xl text-base leading-8 text-velmora-cacao/78">Explore earrings, necklaces, huggies, and gift sets designed with quiet shine and accessible luxury.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMobileFilters(true)} className="flex items-center gap-2 rounded-full border border-velmora-mist px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-espresso lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <label className="sr-only" htmlFor="sort">Sort products</label>
            <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-mist bg-velmora-ivory px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-velmora-espresso focus:border-velmora-gold focus:outline-none">
              {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12">
        <FilterSidebar filters={filters} onChange={handleFilterChange} mobileOpen={mobileFilters} onClose={() => setMobileFilters(false)} />
        <div>
          <div className="mb-6 flex items-center justify-between border-y border-velmora-mist py-4 text-xs uppercase tracking-[0.2em] text-velmora-cacao/70">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium demi-fine jewelry</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} imageContext="shop" sectionLabelId="shop-page-title" />)}
            </div>
          ) : (
            <div className="border border-velmora-mist bg-velmora-champagne p-10 text-center text-velmora-espresso">
              <h2 className="font-serif text-4xl">No pieces found</h2>
              <p className="mt-3 text-sm leading-7 text-velmora-cacao/75">Try adjusting your filters to reveal more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
