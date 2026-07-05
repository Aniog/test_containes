import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets']
const materials = ['all', '18k-gold-plated']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'all') {
      list = list.filter((p) => p.material === selectedMaterial)
    }
    const range = priceRanges[selectedPrice]
    list = list.filter((p) => p.price >= range.min && p.price < range.max)

    if (sort === 'price-low') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)

    return list
  }, [selectedCategory, selectedMaterial, selectedPrice, sort])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedMaterial('all')
    setSelectedPrice(0)
    setSort('featured')
    setSearchParams({})
  }

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filtered])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wide">Shop</h1>
          <p className="mt-2 text-sm text-charcoal-500">Discover our collection of demi-fine jewelry.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal-500 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setSelectedCategory(c)
                      if (c !== 'all') setSearchParams({ category: c })
                      else setSearchParams({})
                    }}
                    className={`block text-sm capitalize transition-colors ${
                      selectedCategory === c ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal-500 mb-3">Material</h3>
              <div className="space-y-2">
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMaterial(m)}
                    className={`block text-sm capitalize transition-colors ${
                      selectedMaterial === m ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    {m === 'all' ? 'All' : '18K Gold Plated'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal-500 mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((r, idx) => (
                  <button
                    key={r.label}
                    onClick={() => setSelectedPrice(idx)}
                    className={`block text-sm transition-colors ${
                      selectedPrice === idx ? 'text-charcoal-900 font-medium' : 'text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {(selectedCategory !== 'all' || selectedMaterial !== 'all' || selectedPrice !== 0) && (
              <button
                onClick={clearFilters}
                className="text-xs text-gold-700 hover:text-gold-800 underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filter toggle + sort */}
          <div className="md:hidden flex items-center justify-between gap-3 mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-charcoal-200 rounded-sm text-sm text-charcoal-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 border border-charcoal-200 rounded-sm text-sm text-charcoal-700 bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile filters panel */}
          {filtersOpen && (
            <div className="md:hidden bg-cream border border-charcoal-100 rounded-sm p-4 mb-4 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal-500">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}>
                  <X className="w-4 h-4 text-charcoal-500" />
                </button>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        selectedCategory === c
                          ? 'bg-charcoal-950 text-white border-charcoal-950'
                          : 'bg-transparent text-charcoal-600 border-charcoal-200'
                      }`}
                    >
                      {c === 'all' ? 'All' : c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-2">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((r, idx) => (
                    <button
                      key={r.label}
                      onClick={() => setSelectedPrice(idx)}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        selectedPrice === idx
                          ? 'bg-charcoal-950 text-white border-charcoal-950'
                          : 'bg-transparent text-charcoal-600 border-charcoal-200'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={clearFilters} className="text-xs text-gold-700 underline underline-offset-4">
                Clear all filters
              </button>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-6">
              <span className="text-xs text-charcoal-500">{filtered.length} products</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 border border-charcoal-200 rounded-sm text-sm text-charcoal-700 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-charcoal-500 text-sm">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-3 text-sm text-gold-700 underline underline-offset-4">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
