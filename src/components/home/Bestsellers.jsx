import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Bestsellers() {
  const { addItem, openCart } = useCart()
  const sectionRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  const bestsellers = products.slice(0, 5)

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold Tone',
      quantity: 1,
      image: product.images[0],
      titleId: product.titleId,
    })
    openCart()
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-dark font-light">Bestsellers</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-taupe text-sm md:text-base mt-4 max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-taupe-sand/20">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={cn(
                    'w-full h-full object-cover transition-transform duration-700',
                    hoveredId === product.id ? 'scale-105' : 'scale-100'
                  )}
                />
                {/* Quick add */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 p-3 transition-all duration-300',
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  )}
                >
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-white/95 backdrop-blur-sm text-dark text-xs uppercase tracking-[0.08em] py-2.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-[0.12em] text-dark">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-xs text-taupe">{product.rating}</span>
                </div>
                <p className="text-sm text-dark font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <h2 id="bestsellers-title" className="sr-only">Bestsellers</h2>
      </div>
    </section>
  )
}