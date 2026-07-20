import React, { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Filter, ChevronDown, Check } from 'lucide-react'
import { products } from '../data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { cn } from '../lib/utils'

const SVG_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnLz4=";

export const Shop = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialCategory = searchParams.get('category') || 'All'
  
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const containerRef = useRef(null)
  
  // Sync URL params to state
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [location.search])

  // Reload images when filtering state changes
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

  const categories = ['All', 'Necklaces', 'Earrings', 'Huggies', 'Sets']
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ]

  // Filter and sort products
  let filteredProducts = activeCategory === 'All' 
    ? [...products] 
    : products.filter(p => p.category === activeCategory)
    
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div ref={containerRef} className="pt-24 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl tracking-wide block uppercase">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p id="shop-subtitle" className="mt-4 text-muted-foreground text-sm uppercase tracking-widest">
            {filteredProducts.length} pieces
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-6 border-y border-border py-4">
          <button 
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} />
            Filters
          </button>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm tracking-widest uppercase focus:outline-none"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar */}
          <aside className={cn(
            "w-full md:w-64 shrink-0 transition-all",
            isFilterOpen ? "block" : "hidden md:block"
          )}>
            <div className="sticky top-32">
              <div className="mb-10">
                <h3 className="text-sm tracking-widest uppercase font-medium mb-6">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm tracking-wide ${activeCategory === cat ? 'text-foreground underline underline-offset-4' : 'text-muted-foreground hover:text-foreground transition-colors'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="text-sm tracking-widest uppercase font-medium mb-6">Material</h3>
                <ul className="space-y-4">
                  <li>
                    <button className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-4 h-4 border border-foreground flex items-center justify-center bg-foreground">
                        <Check size={12} className="text-background" />
                      </div>
                      18K Gold Plated
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-4 h-4 border border-border"></div>
                      Sterling Silver Tone
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          
          {/* Main Grid Area */}
          <div className="flex-grow">
            
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-end mb-8">
              <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border-b border-border pl-0 pr-8 py-2 text-sm tracking-widest uppercase focus:outline-none focus:border-foreground transition-colors"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
            
            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {products.map(product => {
                  if (initialCategory !== 'All' && product.category !== initialCategory) return null;
                  return (
                  <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                    <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
                      <img 
                        data-strk-img={`[${product.descId}] [${product.titleId}] [shop-title] catalog view`}
                        data-strk-img-id={`${product.imgId}-shop`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={SVG_PLACEHOLDER}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <img 
                          data-strk-img={`[${product.descId}] [${product.titleId}] model worn catalog view`}
                          data-strk-img-id={`${product.imgId}-shop-hover`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src={SVG_PLACEHOLDER}
                          alt={`${product.name} worn`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      {product.tag && (
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-xs tracking-widest uppercase px-3 py-1 z-10">
                          {product.tag}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start mt-4">
                      <div>
                        <h3 id={`${product.titleId}-shop`} className="font-serif text-lg tracking-wide uppercase">{product.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{product.category}</p>
                      </div>
                      <p className="mt-1">${product.price}</p>
                    </div>
                    <p id={`${product.descId}-shop`} className="hidden">{product.description}</p>
                  </Link>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-32 border border-border">
                <h3 className="font-serif text-2xl mb-4">No products found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSortBy('featured') }}
                  className="border border-solid border-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}