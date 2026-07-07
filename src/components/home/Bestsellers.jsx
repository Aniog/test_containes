import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = products.slice(0, 5)

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block font-inter text-xs uppercase tracking-widest text-ink border border-stone/30 px-10 py-3.5 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Tags */}
          {product.tags?.includes('new') && (
            <span className="absolute top-3 left-3 bg-gold text-obsidian font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('bestseller') && !product.tags?.includes('new') && (
            <span className="absolute top-3 left-3 bg-obsidian text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart() }}
              className="w-full bg-obsidian/90 text-ivory font-inter text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight mb-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone/30'}
              strokeWidth={0}
            />
          ))}
          <span className="font-inter text-[10px] text-mist ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-inter text-sm text-ink font-medium">${product.price}</p>
      </div>
    </div>
  )
}
