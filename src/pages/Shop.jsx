import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const containerRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const { addItem, openDrawer } = useCart()

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [activeCategory, priceRange, material, sortBy])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'Gold', 1)
    openDrawer()
  }

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : ''}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-deep mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`block text-sm transition-colors ${
              activeCategory === 'all' ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-deep'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.slug ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-deep'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-deep mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '30-50', label: '$30 – $50' },
            { value: '50-70', label: '$50 – $70' },
            { value: '70-120', label: '$70 – $120' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm transition-colors ${
                priceRange === option.value ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-deep'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-deep mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: '18K Gold Plated', label: '18K Gold Plated' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setMaterial(option.value)}
              className={`block text-sm transition-colors ${
                material === option.value ? 'text-velmora-accent font-medium' : 'text-velmora-muted hover:text-velmora-deep'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide font-light text-velmora-deep">
            The Collection
          </h1>
          <div className="w-12 h-px bg-velmora-accent mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-muted-light">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-velmora-deep"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-xs text-velmora-muted tracking-wider">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-velmora-muted tracking-wider">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-velmora-deep bg-transparent border border-velmora-muted-light px-3 py-1.5 focus:outline-none focus:border-velmora-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted text-sm mb-4">No pieces match your filters</p>
                <button
                  onClick={() => {
                    setActiveCategory('all')
                    setPriceRange('all')
                    setMaterial('all')
                  }}
                  className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-accent hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-3">
                      <img
                        data-strk-img-id={`shop-${product.imgId}`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        data-strk-img-id={`shop-${product.imgId2}`}
                        data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-name] worn on model`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-3 left-3 right-3 bg-velmora-deep/90 text-white py-2.5 text-[11px] font-medium tracking-[0.12em] uppercase flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-deep"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                    <h3
                      id={`shop-${product.id}-name`}
                      className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase font-light text-velmora-deep"
                    >
                      {product.name}
                    </h3>
                    <p id={`shop-${product.id}-desc`} className="text-xs text-velmora-muted mt-0.5">
                      {product.description}
                    </p>
                    <p className="text-sm font-medium mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-velmora-surface z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-muted-light">
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-velmora-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-5 py-4">
              <FilterSidebar mobile />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopPage
