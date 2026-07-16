import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { materialFilters, priceFilters, products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const getPriceMatch = (price, selectedRange) => {
  if (!selectedRange) return true
  if (selectedRange === 'Under $50') return price < 50
  if (selectedRange === '$50 to $80') return price >= 50 && price <= 80
  if (selectedRange === '$80 to $120') return price > 80 && price <= 120
  return true
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef(null)

  useStrkImages(containerRef, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts = useMemo(() => {
    const result = products
      .filter((product) =>
        selectedCategory === 'All' ? true : product.category === selectedCategory,
      )
      .filter((product) =>
        selectedMaterial === 'All' ? true : product.material === selectedMaterial,
      )
      .filter((product) => getPriceMatch(product.price, selectedPrice))

    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      return [...result].sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div ref={containerRef} className="bg-canvas text-ink">
      <section className="border-b border-line bg-surface pt-16">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Velmora collection
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl text-ink sm:text-6xl">Shop the collection</h1>
              <p className="max-w-2xl text-sm leading-7 text-ink-muted">
                A modern demi-fine edit of necklaces, earrings, and huggies designed to elevate everyday dressing without feeling overdone.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowFilters((visible) => !visible)}
              className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-canvas px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-accent-soft/40 md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside
            className={`${showFilters ? 'block' : 'hidden'} space-y-8 rounded-[2rem] border border-line bg-surface p-6 text-ink shadow-card lg:block`}
          >
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Category
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-300 ${
                      selectedCategory === category
                        ? 'border-accent bg-accent text-surface'
                        : 'border-line bg-canvas text-ink hover:bg-accent-soft/35'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Price
              </h2>
              <div className="space-y-3">
                {priceFilters.map((price) => (
                  <label key={price} className="flex items-center gap-3 text-sm text-ink">
                    <input
                      type="radio"
                      name="price"
                      value={price}
                      checked={selectedPrice === price}
                      onChange={(event) => setSelectedPrice(event.target.value)}
                      className="h-4 w-4 border-line text-accent focus:ring-accent"
                    />
                    {price}
                  </label>
                ))}
                <button
                  type="button"
                  onClick={() => setSelectedPrice('')}
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-accent"
                >
                  Clear price
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Material
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-sm text-ink">
                  <input
                    type="radio"
                    name="material"
                    value="All"
                    checked={selectedMaterial === 'All'}
                    onChange={(event) => setSelectedMaterial(event.target.value)}
                    className="h-4 w-4 border-line text-accent focus:ring-accent"
                  />
                  All materials
                </label>
                {materialFilters.map((material) => (
                  <label key={material} className="flex items-center gap-3 text-sm text-ink">
                    <input
                      type="radio"
                      name="material"
                      value={material}
                      checked={selectedMaterial === material}
                      onChange={(event) => setSelectedMaterial(event.target.value)}
                      className="h-4 w-4 border-line text-accent focus:ring-accent"
                    />
                    {material}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-line bg-surface px-5 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-muted">
                Showing <span className="font-semibold text-ink">{filteredProducts.length}</span> refined pieces.
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort-by" className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted">
                  Sort
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-line bg-canvas px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-line bg-surface px-6 py-16 text-center shadow-card">
                <h2 className="font-serif text-4xl text-ink">No matches yet</h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ink-muted">
                  Try a different category, price range, or material to uncover more pieces from the Velmora collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
