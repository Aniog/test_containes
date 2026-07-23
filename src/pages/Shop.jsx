import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { SlidersHorizontal, X } from 'lucide-react'

export default function Shop() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory)
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const categories = ['all', 'earrings', 'necklaces', 'huggies']

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <h1 className="font-serif text-3xl lg:text-5xl text-foreground text-center">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground text-center">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20 lg:pb-28">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-foreground bg-transparent border-none hover:text-accent transition-colors font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs">Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm bg-transparent border border-border px-3 py-2 text-foreground focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-48 flex-shrink-0`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h3 className="text-sm uppercase tracking-widest font-medium">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1 bg-transparent border-none text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block w-full text-left text-sm py-1.5 bg-transparent border-none transition-colors capitalize ${
                      activeCategory === cat ? 'text-accent font-medium' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-3">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('price-low')}
                    className="block w-full text-left text-sm py-1.5 bg-transparent border-none text-foreground hover:text-accent transition-colors"
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => setSortBy('price-high')}
                    className="block w-full text-left text-sm py-1.5 bg-transparent border-none text-foreground hover:text-accent transition-colors"
                  >
                    $50 – $100
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
