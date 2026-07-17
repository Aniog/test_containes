import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import products from '../data/products'
import ProductCard from '../components/home/ProductCard'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [priceRange, setPriceRange] = useState([0, 120])
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material)
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, material, priceRange, sort])

  const updateCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-4">Category</h4>
        <div className="space-y-2.5">
          {[
            { id: 'all', label: 'All' },
            { id: 'earrings', label: 'Earrings' },
            { id: 'necklaces', label: 'Necklaces' },
            { id: 'huggies', label: 'Huggies' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateCategory(cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? 'text-velmora font-medium' : 'text-velmora-muted hover:text-velmora'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-4">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-velmora"
          />
          <div className="flex justify-between text-xs text-velmora-muted">
            <span>$0</span>
            <span>Up to ${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-4">Material</h4>
        <div className="space-y-2.5">
          {['all', 'gold'].map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm capitalize transition-colors ${
                material === mat ? 'text-velmora font-medium' : 'text-velmora-muted hover:text-velmora'
              }`}
            >
              {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-3">
            {activeCategory === 'all' ? 'Shop All' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="text-sm text-velmora-muted">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-10 lg:gap-16">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Sort + mobile filter toggle */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-rose/60">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-medium"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters
              </button>
              <div className="hidden lg:block" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs border border-velmora-rose px-3 py-2 bg-transparent focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <p className="text-center text-velmora-muted py-20">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div className="fixed inset-0 bg-velmora/30 z-[120]" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-[130] shadow-2xl p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl tracking-wide">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  )
}
