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
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <img
            alt={product.images[0].alt}
            data-strk-img-id={`bestseller-${product.id}-img1`}
            data-strk-img={`[bestseller-${product.id}-name] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={product.images[1].alt}
            data-strk-img-id={`bestseller-${product.id}-img2`}
            data-strk-img={`[bestseller-${product.id}-name] fine jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className="absolute bottom-4 left-4 right-4 py-3 bg-brand-charcoal/90 text-white font-sans text-xs tracking-wider uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer hover:bg-brand-gold"
      >
        Add to Cart
      </button>

      <div className="mt-4 text-center">
        <h3
          id={`bestseller-${product.id}-name`}
          className="font-serif text-sm tracking-product uppercase text-brand-charcoal"
        >
          {product.name}
        </h3>
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
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Bestsellers</h2>
          <p className="mt-3 font-sans text-sm text-brand-muted">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline no-underline">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
