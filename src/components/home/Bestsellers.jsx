import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id={`bestseller-${product.slug}-img-a1b2`}
            data-strk-img={`[bestseller-${product.slug}-name] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-velmora-charcoal py-2.5 text-[11px] uppercase tracking-extra-wide font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 text-center">
          <h3
            id={`bestseller-${product.slug}-name`}
            className="text-[11px] uppercase tracking-extra-wide font-medium text-velmora-charcoal"
          >
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm font-serif text-velmora-stone">${product.price}</p>
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
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-velmora-stone">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-gold text-velmora-gold px-8 py-3 text-xs uppercase tracking-extra-wide font-medium hover:bg-velmora-gold hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
