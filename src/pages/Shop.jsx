import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart } from '@/components/shared/CartContext'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80)
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [category, priceRange, sort])

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ]

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">Shop All</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs tracking-wide uppercase font-medium text-brand-charcoal hover:text-brand-gold transition-colors md:pointer-events-none"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <p className="text-xs text-brand-warm-gray">{filteredProducts.length} pieces</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs tracking-wide uppercase font-medium text-brand-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-4">Category</h3>
                <div className="space-y-2.5">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setCategory(opt.value)}
                      className={`block text-sm transition-colors ${
                        category === opt.value
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-4">Price</h3>
                <div className="space-y-2.5">
                  {priceOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === opt.value
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-warm-gray hover:text-brand-charcoal'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active filters */}
              {(category !== 'all' || priceRange !== 'all') && (
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all') }}
                  className="flex items-center gap-1.5 text-xs text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  <X size={12} />
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-brand-warm-gray">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand/20 mb-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem(product)
                        }}
                        className="absolute bottom-3 left-3 right-3 btn-accent text-[10px] py-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <ShoppingBag size={14} className="mr-1.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="font-serif text-xs md:text-sm tracking-wide uppercase text-brand-charcoal">
                      {product.name}
                    </h3>
                    <p className="text-xs text-brand-warm-gray mt-0.5">{product.description}</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
