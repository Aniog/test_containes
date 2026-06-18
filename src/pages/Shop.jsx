import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()

  const activeCategory = searchParams.get('category') || 'all'

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

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-warm-gray mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-muted pb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal hover:text-accent transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs tracking-wider text-charcoal bg-transparent border border-muted px-4 py-2 focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-56 flex-shrink-0`}
          >
            <div className="sticky top-28">
              <div className="flex items-center justify-between md:hidden mb-4">
                <h3 className="font-sans text-sm font-medium text-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block font-sans text-sm transition-colors ${
                      activeCategory === 'all' ? 'text-accent' : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block font-sans text-sm transition-colors ${
                        activeCategory === cat.id ? 'text-accent' : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {['Under $40', '$40 – $60', '$60 – $80', 'Over $80'].map(range => (
                    <span
                      key={range}
                      className="block font-sans text-sm text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                    >
                      {range}
                    </span>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h4 className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                  Material
                </h4>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
                    <span
                      key={mat}
                      className="block font-sans text-sm text-warm-gray hover:text-charcoal transition-colors cursor-pointer"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="w-full bg-charcoal/90 text-white font-sans text-xs tracking-wider uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-300"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-3">
                    <h3 className="font-sans text-[11px] tracking-widest-plus uppercase text-charcoal">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm text-warm-gray mt-1">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-warm-gray">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
