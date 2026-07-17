import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-cream aspect-[3/4] block">
        {/* Main image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[10px] tracking-wider uppercase bg-gold text-velvet px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[10px] tracking-wider uppercase bg-velvet text-champagne px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, product.variants[0])
            }}
            className="w-full py-3 bg-velvet/90 text-champagne font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velvet transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3"
              style={i < Math.floor(product.rating)
                ? { fill: '#B8924A', color: '#B8924A' }
                : { fill: 'none', color: '#E8D5B0' }}
            />
          ))}
          <span className="font-sans text-[11px] text-mist ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-base text-velvet uppercase tracking-wider hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-mist line-clamp-1">{product.description}</p>
        <p className="font-sans text-sm font-medium text-velvet mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-10 py-4 border border-velvet text-velvet font-sans text-xs tracking-widest uppercase hover:bg-velvet hover:text-champagne transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
