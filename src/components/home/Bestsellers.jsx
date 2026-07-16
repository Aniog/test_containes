import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const bestsellers = products.filter(p => p.bestseller)

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-3">
            Curated for you
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {bestsellers.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover overlay with quick add */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onAddToCart()
            }}
            className="absolute bottom-0 left-0 right-0 bg-charcoal text-white text-xs tracking-widest uppercase py-3 text-center
            translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-sm sm:text-base font-medium tracking-wider uppercase text-charcoal group-hover:text-gold transition-colors line-clamp-2">
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-charcoal-500 mt-1">
        {formatPrice(product.price)}
      </p>
    </div>
  )
}
