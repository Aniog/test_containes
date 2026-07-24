import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function BestsellersGrid() {
  const containerRef = useRef(null)
  const { addToCart } = useCart()
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const handleAddToCart = (product) => {
    const variant = product.variants[0]
    addToCart(product, variant, 1)
  }

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">Bestsellers</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate quiet luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-secondary mb-3 md:mb-4 overflow-hidden">
                <img
                  data-strk-img-id={`bestseller-${product.id}-img`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Quick Add Button - Always visible on mobile, hover on desktop */}
                <div className={`absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } md:group-hover:opacity-100 md:group-hover:translate-y-0 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4`}>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-white/95 text-foreground py-2.5 md:py-3 text-xs tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1.5 md:space-y-2">
                <Link to={`/product/${product.id}`}>
                  <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm">
                    {product.name}
                  </h3>
                </Link>
                <p id={`${product.id}-desc`} className="text-xs text-muted-foreground line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm font-medium">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
