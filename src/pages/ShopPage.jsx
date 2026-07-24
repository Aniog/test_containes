import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const sort = searchParams.get('sort') || 'default'

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') params.delete(key)
    else params.set(key, value)
    setSearchParams(params)
  }

  const filteredProducts = products
    .filter(p => categoryFilter === 'all' || p.category === categoryFilter)
    .filter(p => {
      if (priceFilter === 'under50') return p.price < 50
      if (priceFilter === '50to80') return p.price >= 50 && p.price <= 80
      if (priceFilter === 'over80') return p.price > 80
      return true
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [categoryFilter, priceFilter, sort])

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-4' : ''}`}>
      {!mobile && (
        <h3 className="font-serif text-lg tracking-[0.05em] text-velmora-dark mb-6">Filters</h3>
      )}

      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-textSecondary mb-3">Category</h4>
        {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter('category', cat)}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors duration-300 ${categoryFilter === cat ? 'text-velmora-gold' : 'text-velmora-dark hover:text-velmora-gold'}`}
          >
            {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-textSecondary mb-3">Price</h4>
        {[
          { value: 'all', label: 'All Prices' },
          { value: 'under50', label: 'Under $50' },
          { value: '50to80', label: '$50 – $80' },
          { value: 'over80', label: 'Over $80' },
        ].map(price => (
          <button
            key={price.value}
            onClick={() => setFilter('price', price.value)}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors duration-300 ${priceFilter === price.value ? 'text-velmora-gold' : 'text-velmora-dark hover:text-velmora-gold'}`}
          >
            {price.label}
          </button>
        ))}
      </div>

      <div>
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-textSecondary mb-3">Material</h4>
        <button className="block w-full text-left font-sans text-sm py-1.5 text-velmora-dark">
          18K Gold Plated
        </button>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-velmora-cream">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-dark">The Collection</h1>
          <div className="flex items-center gap-4">
            <button
              className="md:hidden font-sans text-sm text-velmora-dark flex items-center gap-2"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="font-sans text-sm text-velmora-dark bg-transparent border border-velmora-hairline px-3 py-2 focus:outline-none focus:border-velmora-gold"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="md:hidden mb-6 bg-white border border-velmora-hairline rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-velmora-hairline">
              <h3 className="font-serif text-lg text-velmora-dark">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="text-velmora-dark">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block border-r border-velmora-hairline pr-6">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-velmora-dark">No products match your filters</p>
                <button
                  onClick={() => {
                    setSearchParams({})
                  }}
                  className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold mt-4 hover:text-velmora-goldHover transition-colors duration-300"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-dark/5 shadow-sm hover:shadow-md transition-shadow duration-500">
                        <img
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-velmora-dark/0 group-hover:bg-velmora-dark/10 transition-all duration-300" />
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product, product.tone[0], 1)}
                      className="mt-2 font-sans text-xs tracking-[0.1em] uppercase text-velmora-gold hover:text-velmora-goldHover transition-colors duration-300 flex items-center gap-1"
                      aria-label={`Quick add ${product.name} to cart`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Quick Add
                    </button>
                    <Link to={`/product/${product.slug}`}>
                      <h3 id={product.titleId} className="font-serif text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase text-velmora-dark mt-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p id={product.descId} className="font-sans text-xs md:text-sm text-velmora-textSecondary mt-1">${product.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
