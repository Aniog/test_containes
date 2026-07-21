import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import FilterSidebar from '../components/shop/FilterSidebar'
import { useStrkImages } from '../hooks/useStrkImages'

const emptyFilters = {
  categories: [],
  prices: [],
  materials: [],
}

const matchesPrice = (price, ranges) => {
  if (ranges.length === 0) return true
  return ranges.some((range) => {
    if (range === 'under-50') return price < 50
    if (range === '50-80') return price >= 50 && price <= 80
    if (range === '80-120') return price >= 80 && price <= 120
    return true
  })
}

export default function ShopPage({ products, onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [filters, setFilters] = useState({
    ...emptyFilters,
    categories: initialCategory ? [initialCategory] : [],
  })
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category)
      const materialMatch =
        filters.materials.length === 0 ||
        filters.materials.some((material) => product.material === material || product.accent === material)
      return categoryMatch && materialMatch && matchesPrice(product.price, filters.prices)
    })

    if (sort === 'price-low') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [filters, products, sort])

  useStrkImages(pageRef, [filteredProducts.length, sort, filters.categories.join(','), filters.prices.join(','), filters.materials.join(',')])

  return (
    <main ref={pageRef} className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="border-b border-velmora-mist pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-umber">Velmora shop</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 id="shop-title" className="font-serif text-5xl font-medium leading-tight text-velmora-espresso sm:text-7xl">
                Demi-fine essentials for every day.
              </h1>
              <p id="shop-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-umber">
                Explore earrings, necklaces, huggies, and gifting-ready pieces in warm gold finishes.
              </p>
            </div>
            <label className="block text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-umber">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="mt-2 block min-h-12 w-full min-w-56 border border-velmora-mist bg-velmora-cream px-4 text-sm font-bold normal-case tracking-normal text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Best rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:pb-28">
        <FilterSidebar filters={filters} onChange={setFilters} onClear={() => setFilters(emptyFilters)} />
        <div>
          <div className="mb-5 flex items-center justify-between text-sm font-semibold text-velmora-umber">
            <p>{filteredProducts.length} pieces</p>
            <p>Premium under $120</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} contextQuery="[shop-subtitle] [shop-title] warm gold jewelry product" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-mist bg-velmora-cream p-10 text-center text-velmora-espresso shadow-soft">
              <h2 className="font-serif text-3xl text-velmora-espresso">No pieces match those filters.</h2>
              <p className="mt-3 text-sm leading-6 text-velmora-umber">Clear filters to return to the full Velmora edit.</p>
              <button type="button" onClick={() => setFilters(emptyFilters)} className="mt-6 bg-velmora-oxblood px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
