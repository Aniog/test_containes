import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, Filter, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ]

  const filteredProducts = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (selectedPrice === 'under50' && p.price >= 50) return false
    if (selectedPrice === '50to80' && (p.price < 50 || p.price > 80)) return false
    if (selectedPrice === 'over80' && p.price <= 80) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0 // featured = default order
  })

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28 min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Page header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 id="shop-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Shop All
          </h1>
          <p id="shop-subtitle" className="font-sans text-sm text-muted mt-2 tracking-cta uppercase">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          {/* Sort dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 font-sans text-xs tracking-cta uppercase text-charcoal border border-borderwarm px-3 py-2"
              onClick={() => setSortOpen(!sortOpen)}
            >
              Sort: {priceRanges.find(r => r.value === sortBy)?.label || 'Featured'}
              <ChevronDown className="w-3 h-3" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-borderwarm shadow-lg py-1 z-20">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Top Rated' },
                ].map(option => (
                  <div
                    key={option.value}
                    className="px-3 py-2 font-sans text-sm text-charcoal hover:bg-cream cursor-pointer"
                    onClick={() => { setSortBy(option.value); setSortOpen(false) }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filters panel */}
        {filterOpen && (
          <div className="md:hidden bg-white border border-borderwarm p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-cta uppercase text-charcoal">Filters</span>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-charcoal" />
              </button>
            </div>
            {/* Category */}
            <div className="mb-4">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {[{ value: 'all', label: 'All' }, ...categories.map(c => ({ value: c.id, label: c.name }))].map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`px-3 py-1 font-sans text-xs tracking-cta uppercase border transition-all duration-300 ${
                      selectedCategory === cat.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-borderwarm text-charcoal hover:border-gold'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Price */}
            <div className="mb-4">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPrice(range.value)}
                    className={`px-3 py-1 font-sans text-xs tracking-cta uppercase border transition-all duration-300 ${
                      selectedPrice === range.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-borderwarm text-charcoal hover:border-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-4">Category</p>
              <div className="space-y-2">
                {[{ value: 'all', label: 'All' }, ...categories.map(c => ({ value: c.id, label: c.name }))].map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategoryChange(cat.value)}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      selectedCategory === cat.value
                        ? 'text-gold'
                        : 'text-warmgray hover:text-gold'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Price */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-4">Price</p>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setSelectedPrice(range.value)}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      selectedPrice === range.value
                        ? 'text-gold'
                        : 'text-warmgray hover:text-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Material */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-cta uppercase text-charcoal mb-4">Material</p>
              <div className="space-y-2">
                {['all', '18K Gold Plated'].map(mat => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      selectedMaterial === mat
                        ? 'text-gold'
                        : 'text-warmgray hover:text-gold'
                    }`}
                  >
                    {mat === 'all' ? 'All' : mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <button
                  className="flex items-center gap-2 font-sans text-xs tracking-cta uppercase text-charcoal border border-borderwarm px-3 py-2 hover:border-gold transition-colors duration-300"
                  onClick={() => setSortOpen(!sortOpen)}
                >
                  Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low' : sortBy === 'price-high' ? 'Price: High' : 'Top Rated'}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-borderwarm shadow-lg py-1 z-20 w-48">
                    {[
                      { value: 'featured', label: 'Featured' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Top Rated' },
                    ].map(option => (
                      <div
                        key={option.value}
                        className="px-3 py-2 font-sans text-sm text-charcoal hover:bg-cream cursor-pointer"
                        onClick={() => { setSortBy(option.value); setSortOpen(false) }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <Link to={`/product/${product.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
                    <div className="relative aspect-[3/4] overflow-hidden bg-cardwhite mb-3">
                      <img
                        data-strk-img-id={`shop-${product.images[0].imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] [shop-subtitle] [shop-title]`}
                        data-strk-img-ratio={product.images[0].ratio}
                        data-strk-img-width={String(product.images[0].width)}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      <img
                        data-strk-img-id={`shop-${product.images[1].imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}] [shop-subtitle] [shop-title]`}
                        data-strk-img-ratio={product.images[1].ratio}
                        data-strk-img-width={String(product.images[1].width)}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}
                      />
                      {/* Quick add */}
                      <div className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm py-3 px-4 transition-all duration-300 ${hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <Button
                          size="sm"
                          className="w-full bg-gold hover:bg-gold-hover text-white text-xs"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                        >
                          <ShoppingBag className="w-3 h-3 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    <h3 id={product.titleId} className="font-serif text-sm tracking-product uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p id={product.descId} className="font-sans text-xs text-muted mt-1">{product.description}</p>
                    <p className="font-sans text-sm text-charcoal mt-2">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-4">No pieces found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters.</p>
                <Button variant="outline" onClick={() => { handleCategoryChange('all'); setSelectedPrice('all') }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
