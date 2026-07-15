import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="bg-white text-brand-charcoal font-sans text-xs uppercase tracking-wide-xl px-6 py-2.5 hover:bg-brand-charcoal hover:text-white transition-colors shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-3 text-center">
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 font-sans text-sm text-brand-muted">${product.price}</p>
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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 font-sans text-sm text-brand-muted">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-wide-xl px-8 py-3 hover:bg-brand-gold hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
