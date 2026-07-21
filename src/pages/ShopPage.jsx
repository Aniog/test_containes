import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden rounded-sm">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[shop-${product.id}-name] ${product.category} ${product.description}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-2.5 bg-velmora-charcoal/90 backdrop-blur-sm text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.id}-name`}
            className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-velmora-stone line-clamp-1">{product.description}</p>
        <div className="flex items-center gap-2 pt-0.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-graphite">{product.rating}</span>
          </div>
          <span className="text-sm font-medium text-velmora-charcoal">${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)
  const containerRef = useRef(null)

  const activeCategory = searchParams.get('category') || 'all'
  const sortBy = searchParams.get('sort') || 'featured'

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
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

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    setSearchParams(params)
  }

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', sort)
    setSearchParams(params)
  }

  const activeCategoryName =
    activeCategory === 'all'
      ? 'All Jewelry'
      : categories.find((c) => c.id === activeCategory)?.name || activeCategory

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal tracking-wide">
            {activeCategoryName}
          </h1>
          <p className="mt-3 text-sm text-velmora-stone">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-velmora-charcoal font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors rounded-full ${
                activeCategory === 'all'
                  ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                  : 'border-velmora-border text-velmora-stone hover:border-velmora-gold-light'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors rounded-full ${
                  activeCategory === cat.id
                    ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                    : 'border-velmora-border text-velmora-stone hover:border-velmora-gold-light'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-[0.1em] uppercase text-velmora-charcoal font-medium pr-6 py-1.5 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-velmora-stone absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-velmora-ivory border border-velmora-border rounded-sm animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-charcoal font-medium">
                Category
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-velmora-stone" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors rounded-full ${
                  activeCategory === 'all'
                    ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                    : 'border-velmora-border text-velmora-stone'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors rounded-full ${
                    activeCategory === cat.id
                      ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-charcoal'
                      : 'border-velmora-border text-velmora-stone'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
            <p className="text-sm text-velmora-stone">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
