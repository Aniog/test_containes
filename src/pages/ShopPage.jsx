import { useEffect, useRef, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/home/ProductCard'
import products from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['All', '18K Gold Plated Brass', 'Crystal']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
]

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
]

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'

  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter((p) => p.materials.includes(selectedMaterial))
    }

    const priceRange = priceRanges.find((r) => r.label === selectedPrice)
    if (priceRange && selectedPrice !== 'All') {
      filtered = filtered.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max)
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-serif text-sm tracking-wide mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-warm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-serif text-sm tracking-wide mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range.label)}
              className={`block text-sm transition-colors ${
                selectedPrice === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-warm'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-serif text-sm tracking-wide mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-warm'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Shop All</p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide">
            {selectedCategory === 'All' ? 'The Collection' : selectedCategory}
          </h1>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-sm text-velmora-warm border border-velmora-border px-4 py-2 w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileFiltersOpen && (
            <div className="mt-4 p-4 border border-velmora-border bg-velmora-surface">
              <FilterContent />
            </div>
          )}
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort + results count */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-muted">{filteredProducts.length} products</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-velmora-warm pr-6 cursor-pointer outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-muted" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted text-lg mb-4">No products match your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedMaterial('All')
                    setSelectedPrice('All')
                  }}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
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