import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Filter } from 'lucide-react'
import { SEED_PRODUCTS } from '../lib/data'
import { useStore } from '../store'
import { cn } from '../lib/utils'

export const ShopPage = () => {
  const { addToCart } = useStore()
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = useMemo(() => {
    let result = [...SEED_PRODUCTS]
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        // using ID as a proxy for newest for seed data
        result.sort((a, b) => b.id.localeCompare(a.id))
        break
      default:
        // featured: keep as is (could use isBestseller flag too)
        break
    }

    return result
  }, [activeCategory, sortBy])

  return (
    <div className="pt-20">
      {/* Shop Header */}
      <div className="bg-[#fcfbf9] py-16 px-4 text-center border-b border-border">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All Jewelry</h1>
        <p className="text-foreground/70 font-light max-w-xl mx-auto">
          Discover our full collection of thoughtfully designed piece. Crafted in 18k gold vermeil and solid 14k gold for lasting wear.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
          <div>
            <h3 className="text-editorial text-sm mb-4 pb-2 border-b border-border flex items-center justify-between">
              Categories
              <Filter className="w-4 h-4 md:hidden" />
            </h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "text-sm hover:text-primary transition-colors",
                      activeCategory === cat ? "font-medium text-primary" : "text-foreground/70"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-editorial text-sm mb-4 pb-2 border-b border-border">Sort By</h3>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary cursor-pointer pr-10"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-50" />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 md:hidden">
             <span className="text-sm opacity-70">{filteredProducts.length} Products</span>
             <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-sm focus:outline-none pr-6 font-medium uppercase tracking-widest text-right"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest</option>
                <option value="price-low">Sort: $ Low-High</option>
                <option value="price-high">Sort: $ High-Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-50" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
            {filteredProducts.map(product => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    data-strk-img-id={`shop-primary-${product.id}`}
                    data-strk-img={`[shop-name-${product.id}] jewelry light background`}
                    data-strk-img-ratio="4x5"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={`shop-hover-${product.id}`}
                    data-strk-img={`[shop-name-${product.id}] jewelry model worn`}
                    data-strk-img-ratio="4x5"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.hoverImageAlt}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-foreground py-3 text-xs uppercase tracking-widest font-medium opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:translate-y-2 lg:group-hover:translate-y-0"
                  >
                    Quick Add
                  </button>
                </Link>
                <div className="space-y-1 text-center">
                  <h3 id={`shop-name-${product.id}`} className="font-serif text-lg">{product.name}</h3>
                  <p className="text-sm opacity-70">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
             <div className="py-20 text-center text-foreground/60">
               No products found in this category.
             </div>
          )}
        </div>
      </div>
    </div>
  )
}