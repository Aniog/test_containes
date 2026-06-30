import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/home/ProductCard'
import products, { categories, materials } from '@/data/products'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const categoryParam = searchParams.get('category') || 'All'

  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 120])

  useEffect(() => {
    setActiveCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeCategory, activeMaterial, sortBy])

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory || p.subcategory === activeCategory)
    }
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.variants.some((v) => v.toLowerCase().includes(activeMaterial.toLowerCase())))
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default: // featured
        break
    }
    return result
  }, [activeCategory, activeMaterial, sortBy, priceRange])

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-warm-dark font-sans mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setMobileFilterOpen(false) }}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat ? 'text-warm-dark font-medium' : 'text-muted hover:text-warm-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-warm-dark font-sans mb-4">Material</h4>
        <div className="space-y-2.5">
          {['All', ...materials].map((mat) => (
            <button
              key={mat}
              onClick={() => { setActiveMaterial(mat); setMobileFilterOpen(false) }}
              className={`block text-sm font-sans transition-colors ${
                activeMaterial === mat ? 'text-warm-dark font-medium' : 'text-muted hover:text-warm-dark'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-warm-dark font-sans mb-4">Price</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="120"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-gold"
          />
          <div className="flex justify-between text-xs text-muted font-sans">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="container-narrow py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider">
            {activeCategory === 'All' ? 'Shop All' : activeCategory}
          </h1>
          <p className="mt-3 text-muted text-sm font-sans">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-warm-dark/10">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-warm-dark font-sans"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-muted font-sans hidden md:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs tracking-wider uppercase text-warm-dark font-sans bg-transparent border border-warm-dark/15 px-3 py-2 pr-8 appearance-none cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-warm-dark" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-dark/40">No products found</p>
                <button onClick={() => { setActiveCategory('All'); setActiveMaterial('All'); setPriceRange([0, 120]) }} className="text-xs tracking-wider uppercase text-gold-dark font-sans mt-4 hover:underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
          <div className="fixed inset-0 bg-warm-dark/40 z-50 md:hidden" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 md:hidden p-6 rounded-t-2xl shadow-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1"><X size={20} /></button>
            </div>
            <FiltersContent />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  )
}