import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { useCart } from '../context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

const FILTERS = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  material: ['All', '18K Gold Plated', 'Solid Gold', 'Sterling Silver'],
  price: ['All', 'Under $50', '$50 - $100', 'Over $100']
}

// Re-using the seed data from bestsellers plus a few more
const PRODUCTS = [
  { id: 'vivid-aura', name: 'Vivid Aura Jewels', price: 42, category: 'Earrings', material: '18K Gold Plated', images: ['[vivid-aura-desc] [vivid-aura-title] gold ear cuff', '[vivid-aura-desc] [vivid-aura-title] gold ear cuff lifestyle close up'] },
  { id: 'majestic-flora', name: 'Majestic Flora Nectar', price: 68, category: 'Necklaces', material: '18K Gold Plated', images: ['[majestic-flora-desc] [majestic-flora-title] gold floral necklace', '[majestic-flora-desc] [majestic-flora-title] gold floral necklace worn on neck'] },
  { id: 'golden-sphere', name: 'Golden Sphere Huggies', price: 38, category: 'Huggies', material: '18K Gold Plated', images: ['[golden-sphere-desc] [golden-sphere-title] gold chunk dome huggies', '[golden-sphere-desc] [golden-sphere-title] gold chunky dome huggies on ear'] },
  { id: 'amber-lace', name: 'Amber Lace Earrings', price: 54, category: 'Earrings', material: '18K Gold Plated', images: ['[amber-lace-desc] [amber-lace-title] gold textured filigree drop earrings', '[amber-lace-desc] [amber-lace-title] gold textured filigree drop earrings fashion'] },
  { id: 'royal-heirloom', name: 'Royal Heirloom Set', price: 95, category: 'Sets', material: '18K Gold Plated', images: ['[royal-heirloom-desc] [royal-heirloom-title] gold earring necklace gift set', '[royal-heirloom-desc] [royal-heirloom-title] gold earring necklace gift set packaging'] },
  { id: 'solstice-pendant', name: 'Solstice Sun Pendant', price: 48, category: 'Necklaces', material: '18K Gold Plated', images: ['sun pendant gold necklace delicate', 'sun pendant gold necklace worn'] },
  { id: 'pearl-drop', name: 'Baroque Pearl Drops', price: 62, category: 'Earrings', material: '18K Gold Plated', images: ['baroque pearl drop earrings gold', 'baroque pearl drop earrings worn'] },
  { id: 'classic-chain', name: 'Essential Herringbone Chain', price: 34, category: 'Necklaces', material: 'Solid Gold', images: ['thick gold herringbone chain', 'thick gold herringbone chain neck'] },
]

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  
  const [activeFilters, setActiveFilters] = useState({
    category: initialCategory ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'All',
    material: 'All',
    price: 'All'
  })
  
  const [sortBy, setSortBy] = useState('featured')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)
  
  const { addItem } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    if (initialCategory) {
      setActiveFilters(prev => ({
        ...prev,
        category: initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
      }))
    }
  }, [initialCategory])

  // Filter logic
  const filteredProducts = PRODUCTS.filter(product => {
    if (activeFilters.category !== 'All' && product.category !== activeFilters.category) return false
    if (activeFilters.material !== 'All' && product.material !== activeFilters.material) return false
    
    if (activeFilters.price === 'Under $50' && product.price >= 50) return false
    if (activeFilters.price === '$50 - $100' && (product.price < 50 || product.price > 100)) return false
    if (activeFilters.price === 'Over $100' && product.price <= 100) return false
    
    return true
  })

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0 // default 'featured' keeps original order
  })

  useEffect(() => {
    if (containerRef.current) {
        try {
            ImageHelper.loadImages(strkImgConfig, containerRef.current)
        } catch (e) {
            console.log('ImageHelper not initialized yet in dev mode')
        }
    }
  }, [sortedProducts]) // Re-run when products change

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8 md:py-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">All Jewelry</h1>
        <p className="font-sans text-muted-foreground max-w-xl mx-auto">Discover our full collection of carefully crafted pieces designed to elevate your everyday.</p>
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex justify-between items-center mb-6 border-b border-border pb-4">
        <button 
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-2 font-sans text-sm tracking-wide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          Filters 
        </button>
        <div className="relative">
           <select 
            className="appearance-none bg-transparent font-sans text-sm tracking-wide pr-6 focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Filters */}
        <aside className={`w-full md:w-64 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="space-y-8 sticky top-24">
            
            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-sm tracking-widest uppercase mb-4 text-foreground">Category</h3>
              <ul className="space-y-3 font-sans text-sm text-muted-foreground">
                {FILTERS.category.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveFilters({...activeFilters, category: cat})}
                      className={`hover:text-primary transition-colors text-left w-full ${activeFilters.category === cat ? 'text-primary font-medium' : ''}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-serif text-sm tracking-widest uppercase mb-4 text-foreground">Material</h3>
              <ul className="space-y-3 font-sans text-sm text-muted-foreground">
                {FILTERS.material.map(mat => (
                  <li key={mat}>
                    <button 
                      onClick={() => setActiveFilters({...activeFilters, material: mat})}
                      className={`hover:text-primary transition-colors text-left w-full ${activeFilters.material === mat ? 'text-primary font-medium' : ''}`}
                    >
                      {mat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-sm tracking-widest uppercase mb-4 text-foreground">Price</h3>
              <ul className="space-y-3 font-sans text-sm text-muted-foreground">
                {FILTERS.price.map(p => (
                  <li key={p}>
                    <button 
                      onClick={() => setActiveFilters({...activeFilters, price: p})}
                      className={`hover:text-primary transition-colors text-left w-full ${activeFilters.price === p ? 'text-primary font-medium' : ''}`}
                    >
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          
          {/* Desktop Sort */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="font-sans text-sm text-muted-foreground">{sortedProducts.length} Products</span>
            <div className="flex items-center gap-2 font-sans text-sm">
              <span className="text-muted-foreground">Sort By:</span>
              <select 
                className="bg-transparent text-foreground focus:outline-none cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group block cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                  <img 
                    data-strk-img-id={`shop-${product.id}-1`}
                    data-strk-img={product.images[0]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={`shop-${product.id}-2`}
                    data-strk-img={product.images[1]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                  
                  <button 
                    className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm text-foreground py-2 text-xs font-serif uppercase tracking-widest opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 active:bg-primary active:text-primary-foreground"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      e.stopPropagation();
                      addItem(product);
                    }}
                  >
                    Quick Add
                  </button>
                </div>
                <div className="text-center">
                  <h3 id={`shop-${product.id}-title`} className="font-serif text-sm uppercase tracking-widest mb-1 text-foreground">
                    {product.name}
                  </h3>
                  <p id={`shop-${product.id}-desc`} className="font-sans text-sm text-muted-foreground mb-1">
                    ${product.price}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground/60">
                    {product.material}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-xl text-muted-foreground mb-4">No pieces match your current filters.</p>
              <button 
                onClick={() => setActiveFilters({category: 'All', material: 'All', price: 'All'})}
                className="font-sans text-sm underline underline-offset-4 hover:text-primary"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}