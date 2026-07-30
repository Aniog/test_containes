import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const categoryParam = searchParams.get('category')

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceRange === 'under50') result = result.filter((p) => p.price < 50)
    if (priceRange === '50to100') result = result.filter((p) => p.price >= 50 && p.price <= 100)
    if (priceRange === 'over100') result = result.filter((p) => p.price > 100)

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    if (sortBy === 'newest') result.reverse()

    return result
  }, [activeCategory, priceRange, sortBy])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`block text-sm transition-colors ${
                activeCategory === cat ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 – $100' },
            { value: 'over100', label: 'Over $100' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block text-sm transition-colors ${
                priceRange === opt.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          <button className="block text-sm text-charcoal font-medium">18K Gold Plated</button>
        </div>
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="bg-cream pt-24 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-5xl text-charcoal tracking-wide">
            {activeCategory !== 'All' ? activeCategory : 'Shop All'}
          </h1>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
          <p className="mt-4 text-sm text-stone font-light">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-stone hover:text-charcoal transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-stone hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs bg-transparent border border-warm rounded-sm px-3 py-2 text-charcoal focus:outline-none focus:border-stone cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone">No products match your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setPriceRange('all') }}
                  className="mt-4 text-xs tracking-[0.2em] uppercase text-gold-dark underline underline-offset-4 hover:text-bronze transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={() => setFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg tracking-wide">Filters</h2>
              <button onClick={() => setFilterOpen(false)} className="text-charcoal/50 hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  )
}
