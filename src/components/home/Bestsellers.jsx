import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-3">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={String(product.images[0].width)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={String(product.images[1].width)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm py-3 px-4 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <Button
              size="sm"
              className="w-full bg-gold hover:bg-gold-hover text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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

        {/* Product info */}
        <h3 id={product.titleId} className="font-serif text-sm tracking-product uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p id={product.descId} className="font-sans text-xs text-muted mt-1">{product.description}</p>
        <p className="font-sans text-sm text-charcoal mt-2">${product.price}</p>
      </Link>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="font-sans text-sm text-muted mt-2 tracking-cta uppercase">
            The pieces everyone loves
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop">
            <Button variant="outline" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
