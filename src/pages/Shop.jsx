import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import Footer from '@/components/home/Footer'
import products, { categories } from '@/data/products'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

const materials = ['Gold Plated', 'Silver', 'Crystal', 'Pearl']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [sort, setSort] = useState('featured')

  const activeCategory = searchParams.get('category') || ''
  const [priceFilter, setPriceFilter] = useState(null)
  const [materialFilter, setMaterialFilter] = useState('')

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory) {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.name.toLowerCase().includes('huggie') || p.category === 'earrings')
      } else {
        result = result.filter((p) => p.category === activeCategory)
      }
    }
    if (priceFilter) {
      result = result.filter((p) => p.price >= priceFilter.min && p.price <= priceFilter.max)
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [activeCategory, priceFilter, sort])

  const clearFilters = () => {
    setSearchParams({})
    setPriceFilter(null)
    setMaterialFilter('')
    setSort('featured')
  }

  const hasFilters = activeCategory || priceFilter || materialFilter

  return (
    <div>
      <div className="pt-20 md:pt-24">
        {/* Header */}
        <div className="section-pad py-10 md:py-14 text-center max-w-[1440px] mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-velvet-800 mb-3">
            {activeCategory ? categories.find((c) => c.slug === activeCategory)?.name || 'Shop' : 'The Collection'}
          </h1>
          <p className="text-velvet-500 font-sans text-sm max-w-md mx-auto leading-relaxed">
            {activeCategory
              ? `Explore our curated selection of ${activeCategory} — designed to be worn and treasured.`
              : 'Demi-fine gold jewelry for the everyday extraordinary. Each piece designed in London, crafted to be treasured.'}
          </p>
        </div>

        <hr className="hairline-divider" />

        <div className="section-pad max-w-[1440px] mx-auto py-8">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button
              className="md:hidden flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-velvet-600 hover:text-velvet-800 transition-colors"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters {hasFilters ? `(${filtered.length})` : ''}
            </button>

            <div className="hidden md:flex items-center gap-6">
              {/* Category pills */}
              <button
                className={`text-xs font-sans tracking-wider uppercase transition-colors ${
                  !activeCategory ? 'text-velvet-800 font-semibold' : 'text-velvet-500 hover:text-velvet-800'
                }`}
                onClick={() => setSearchParams({})}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`text-xs font-sans tracking-wider uppercase transition-colors ${
                    activeCategory === cat.slug ? 'text-velvet-800 font-semibold' : 'text-velvet-500 hover:text-velvet-800'
                  }`}
                  onClick={() => setSearchParams({ category: cat.slug })}
                >
                  {cat.name}
                </button>
              ))}

              {/* Price filters */}
              <div className="w-px h-4 bg-velvet-800/15" />
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  className={`text-xs font-sans tracking-wider uppercase transition-colors ${
                    priceFilter?.min === range.min ? 'text-velvet-800 font-semibold' : 'text-velvet-500 hover:text-velvet-800'
                  }`}
                  onClick={() => setPriceFilter(priceFilter?.min === range.min ? null : range)}
                >
                  {range.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {hasFilters && (
                <button
                  className="text-xs text-velvet-500 hover:text-velvet-800 underline underline-offset-4 transition-colors"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
              <select
                className="text-xs font-sans tracking-wider uppercase bg-transparent border border-velvet-800/20 px-3 py-2 text-velvet-700 cursor-pointer outline-none focus:border-velvet-800/60"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Mobile filter panel */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileFilterOpen ? 'max-h-96 mb-8' : 'max-h-0'
            }`}
          >
            <div className="space-y-5 pb-6 border-b border-velvet-800/10">
              <div>
                <p className="text-xs font-sans font-semibold tracking-wider uppercase text-velvet-800 mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`text-xs px-4 py-1.5 border transition-colors ${
                      !activeCategory ? 'border-velvet-800 bg-velvet-800 text-cream-50' : 'border-velvet-800/20 text-velvet-600'
                    }`}
                    onClick={() => setSearchParams({})}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`text-xs px-4 py-1.5 border transition-colors ${
                        activeCategory === cat.slug ? 'border-velvet-800 bg-velvet-800 text-cream-50' : 'border-velvet-800/20 text-velvet-600'
                      }`}
                      onClick={() => setSearchParams({ category: cat.slug })}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-sans font-semibold tracking-wider uppercase text-velvet-800 mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      className={`text-xs px-4 py-1.5 border transition-colors ${
                        priceFilter?.min === range.min ? 'border-velvet-800 bg-velvet-800 text-cream-50' : 'border-velvet-800/20 text-velvet-600'
                      }`}
                      onClick={() => setPriceFilter(priceFilter?.min === range.min ? null : range)}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-velvet-800 mb-2">No pieces found</p>
              <p className="text-sm text-velvet-500 mb-6">Try adjusting your filters</p>
              <button className="btn-outline" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}
