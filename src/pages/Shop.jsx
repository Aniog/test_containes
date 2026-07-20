import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const seedProducts = [
  { id: '1', name: 'VIVID AURA JEWELS', slug: 'vivid-aura-jewels', price: 42, category: 'earrings', imageId: 'shop-aura-cuff-1', descId: 'shop-aura-desc' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', slug: 'majestic-flora-nectar', price: 68, category: 'necklaces', imageId: 'shop-flora-neck-2', descId: 'shop-flora-desc' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', slug: 'golden-sphere-huggies', price: 38, category: 'huggies', imageId: 'shop-sphere-hug-3', descId: 'shop-sphere-desc' },
  { id: '4', name: 'AMBER LACE EARRINGS', slug: 'amber-lace-earrings', price: 54, category: 'earrings', imageId: 'shop-amber-ear-4', descId: 'shop-amber-desc' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', slug: 'royal-heirloom-set', price: 95, category: 'necklaces', imageId: 'shop-royal-set-5', descId: 'shop-royal-desc' }
]

export default function Shop() {
  const { category } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCartStore()
  
  const [sortBy, setSortBy] = useState('featured')

  let filteredProducts = category && category !== 'all' 
    ? seedProducts.filter(p => p.category === category)
    : [...seedProducts]

  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  useEffect(() => {
    try {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    } catch (e) {
      console.log('Image setup skipped', e)
    }
  }, [category, sortBy])

  const title = category && category !== 'all' ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Jewelry'

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-background max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl">{title}</h1>
          <p className="text-secondary-foreground mt-4 font-light max-w-xl">
            Explore our curated collection of demi-fine jewelry. Crafted in 18k gold vermeil for everyday elegance.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm relative">
          <label htmlFor="sort" className="text-secondary-foreground hidden md:inline">Sort by:</label>
          <select 
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-b border-border py-2 pr-8 focus:outline-none focus:border-primary appearance-none rounded-none text-foreground cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-48 shrink-0">
          <div className="sticky top-32">
            <h3 className="font-medium mb-6 uppercase tracking-widest text-xs">Categories</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li>
                <Link to="/collections/all" className={`hover:text-primary transition-colors ${(!category || category === 'all') ? 'text-primary font-medium' : ''}`}>
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/collections/earrings" className={`hover:text-primary transition-colors ${category === 'earrings' ? 'text-primary font-medium' : ''}`}>
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/collections/necklaces" className={`hover:text-primary transition-colors ${category === 'necklaces' ? 'text-primary font-medium' : ''}`}>
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collections/huggies" className={`hover:text-primary transition-colors ${category === 'huggies' ? 'text-primary font-medium' : ''}`}>
                  Huggies
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
             <div className="text-center py-24 text-secondary-foreground font-light">
               No products found in this category.
             </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
              {filteredProducts.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img 
                      data-strk-img-id={product.imageId}
                      data-strk-img={`[${product.descId}] [shop-product-${product.id}] [shop-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Quick Add Button */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            slug: product.slug,
                            variant: 'Gold',
                            image: null
                          })
                        }}
                        className="w-full bg-white text-black border border-transparent py-3 text-xs uppercase tracking-widest font-medium shadow-sm hover:border-black transition-colors"
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p id={`shop-product-${product.id}`} className="font-serif text-sm tracking-wider uppercase mb-1">
                      <Link to={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                    </p>
                    <p id={product.descId} className="hidden">{product.category}</p>
                    <p className="text-secondary-foreground text-sm font-light">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
