import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
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
  }, [selectedCategory, sortBy])

  return (
    <main className="pt-20 md:pt-24 bg-ivory min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <nav className="font-sans text-xs text-warm-gray mb-4">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">Shop All</span>
        </nav>
        <h1 className="font-serif text-3xl md:text-5xl text-espresso">The Collection</h1>
        <p className="mt-3 text-warm-gray font-sans text-sm max-w-lg">
          Explore our full range of demi-fine jewelry — from everyday essentials to statement pieces for special moments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-warm-border-light pb-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-xs text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs uppercase tracking-wide text-espresso bg-transparent border border-warm-border-light px-4 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            {/* Mobile close */}
            <div className="md:hidden flex items-center justify-between mb-4">
              <span className="font-sans text-sm font-medium text-espresso">Filters</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4 text-espresso" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`block font-sans text-sm transition-colors ${
                    selectedCategory === 'all' ? 'text-gold' : 'text-espresso hover:text-gold'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block font-sans text-sm transition-colors ${
                      selectedCategory === cat.id ? 'text-gold' : 'text-espresso hover:text-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Price</h3>
              <div className="space-y-2">
                {['Under $40', '$40 – $60', '$60 – $100', 'Over $100'].map(range => (
                  <button
                    key={range}
                    className="block font-sans text-sm text-espresso hover:text-gold transition-colors"
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Material</h3>
              <div className="space-y-2">
                {['Gold Plated', 'Silver Plated', 'Sterling Silver'].map(material => (
                  <button
                    key={material}
                    className="block font-sans text-sm text-espresso hover:text-gold transition-colors"
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso">No pieces found</p>
                <p className="mt-2 text-sm text-warm-gray">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Collection
