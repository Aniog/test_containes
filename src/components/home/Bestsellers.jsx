import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { PRODUCTS } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Bestsellers() {
  const { addItem, setIsCartOpen } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setIsCartOpen(true)
  }

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Bestsellers
          </h2>
          <p id="bestsellers-subhead" className="text-muted-foreground max-w-2xl mx-auto">
            Our most loved pieces. Crafted for those who appreciate understated elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {PRODUCTS.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group block group/card">
              <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                {/* Primary Image */}
                <img 
                  alt={item.name}
                  data-strk-img-id={`best-${item.id}-img1`}
                  data-strk-img={`[best-title-${item.id}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                />
                {/* Hover Image */}
                <img 
                  alt={`${item.name} alternate view`}
                  data-strk-img-id={`best-${item.id}-img2`}
                  data-strk-img={`[best-title-${item.id}] model side view close up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                  <Button 
                    onClick={(e) => handleAddToCart(e, item)}
                    className="w-full bg-white/90 hover:bg-white text-black rounded-none shadow-sm h-10 text-xs font-semibold uppercase tracking-widest"
                  >
                    Quick Add
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <h3 id={`best-title-${item.id}`} className="font-serif uppercase tracking-widest text-sm font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 h-12 tracking-widest uppercase text-xs">
            <Link to="/shop">View All Pieces</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
