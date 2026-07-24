import { useState, useMemo, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const pageRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory)
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div ref={pageRef} className="pt-20">
      {/* Header */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-muted-fg text-sm mt-2">
            {activeCategory === 'all'
              ? 'Explore our complete collection of demi-fine pieces'
              : categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-3 py-2 border border-border text-sm text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <span className="text-sm text-muted-fg hidden md:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border text-sm text-charcoal bg-transparent focus:outline-none focus:border-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            {/* Mobile close */}
            <div className="md:hidden flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Filters</span>
              <button onClick={() => setShowFilters(false)} className="text-charcoal">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-3">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setCategory('all')}
                  className={`block text-sm transition-colors ${
                    activeCategory === 'all' ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`block text-sm transition-colors ${
                      activeCategory === cat.id ? 'text-charcoal font-medium' : 'text-muted-fg hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-3">Price</h3>
              <div className="space-y-2">
                {['Under $40', '$40 – $60', '$60 – $80', 'Over $80'].map(range => (
                  <span key={range} className="block text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">
                    {range}
                  </span>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-fg mb-3">Material</h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
                  <span key={mat} className="block text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-fg">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
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
