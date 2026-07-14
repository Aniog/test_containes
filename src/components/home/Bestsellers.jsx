import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <img
            data-strk-img-id={`bestseller-${product.imgId}-a1b2c3`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-brand-charcoal/90 backdrop-blur-sm text-white py-2.5 text-[10px] tracking-widest-plus uppercase font-sans font-medium hover:bg-brand-gold transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest-plus text-brand-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">
            {product.description}
          </p>
          <p className="mt-1 text-sm text-brand-taupe font-sans">
            ${product.price}
          </p>
        </div>
      </Link>
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
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-brand-taupe font-sans">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
