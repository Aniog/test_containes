import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-brand-graphite overflow-hidden">
          {/* Primary image */}
          <img
            data-strk-img-id={`${product.imgId}-primary`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-brand-gold text-brand-black text-[10px] font-semibold tracking-wider uppercase">
              {product.badge}
            </span>
          )}

          {/* Quick add overlay */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-3 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-xs font-semibold tracking-wider uppercase hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-lg tracking-wide text-brand-cream group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-brand-muted">{product.description.slice(0, 60)}...</p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-lg font-serif text-brand-gold">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              <span className="text-xs text-brand-muted">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-mega-wide uppercase text-brand-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-heading text-brand-cream">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/collection"
            className="inline-block px-10 py-3.5 border border-brand-gold text-brand-gold text-sm tracking-wider uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
