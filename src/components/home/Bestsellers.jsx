import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { products } from '@/lib/data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3x4] bg-dark-gray overflow-hidden rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 right-4 bg-primary text-primary-foreground font-sans text-xs uppercase tracking-nav px-4 py-2 hover:bg-muted-gold transition-all duration-300 flex items-center gap-2 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3 h-3" />
        Add to Cart
      </button>

      {/* Product info */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif font-light text-sm uppercase tracking-product text-foreground hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-muted-foreground mt-1">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-primary mt-2">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <p className="font-sans text-sm text-muted-foreground mt-3">The pieces our customers treasure most</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
