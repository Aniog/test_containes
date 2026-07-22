import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/store/useCart'
import { Filter, SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Shop() {
  const { addToCart } = useCart()
  const [filter, setFilter] = useState('all')
  const containerRef = React.useRef(null)

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filter])

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 pt-12">
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide mb-4">Shop the Collection</h1>
          <p className="text-muted-foreground font-light text-lg">Demi-fine jewelry for everyday elegance.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar / Filters (Simplified) */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6 font-serif text-xl border-b border-border pb-4">
                <SlidersHorizontal className="w-5 h-5" /> Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-medium mb-4 text-muted-foreground">Category</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <button 
                        className={`hover:text-primary transition-colors ${filter === 'all' ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setFilter('all')}
                      >
                        All Categories
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`hover:text-primary transition-colors ${filter === 'earrings' ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setFilter('earrings')}
                      >
                        Earrings
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`hover:text-primary transition-colors ${filter === 'necklaces' ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setFilter('necklaces')}
                      >
                        Necklaces
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`hover:text-primary transition-colors ${filter === 'huggies' ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setFilter('huggies')}
                      >
                        Huggies & Cuffs
                      </button>
                    </li>
                    <li>
                      <button 
                        className={`hover:text-primary transition-colors ${filter === 'sets' ? 'text-primary font-medium' : 'text-foreground'}`}
                        onClick={() => setFilter('sets')}
                      >
                        Gift Sets
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
              <p className="text-sm text-muted-foreground">{filteredProducts.length} Results</p>
              <select className="bg-transparent text-sm border-none outline-none focus:ring-0 cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4 block">
                    <img 
                      data-strk-img-id={`shop-img-${product.id}`}
                      data-strk-img={product.imageQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-700 absolute inset-0 z-10 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`shop-hover-${product.id}`}
                      data-strk-img={product.hoverImageQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} worn`}
                      className="w-full h-full object-cover absolute inset-0 z-0"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({ ...product, variant: product.variants[0] });
                        }}
                        className="w-full rounded-none uppercase tracking-widest text-xs h-12 bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-sm"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>

                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base tracking-wide uppercase mb-1">
                        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-xs font-light mb-2">{product.material}</p>
                    </div>
                    <p className="font-medium tracking-wide text-sm">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
