import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-stoneLight overflow-hidden">
          <img
            data-strk-img-id={`bestseller-${product.id}-img-a1`}
            data-strk-img={`[bestseller-${product.id}-name] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-ivory/90 text-charcoal font-sans text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3
            id={`bestseller-${product.id}-name`}
            className="font-serif text-sm uppercase tracking-widest text-charcoal"
          >
            {product.name}
          </h3>
          <p className="font-sans text-sm text-stone mt-1">${product.price}</p>
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault()
          addItem(product)
        }}
        className={`absolute bottom-[72px] left-0 right-0 mx-3 flex items-center justify-center gap-2 bg-charcoal/90 text-ivory font-sans text-xs uppercase tracking-wider py-2.5 transition-all duration-300 border-none cursor-pointer ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>
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
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-normal">Bestsellers</h2>
          <p className="font-sans text-sm text-stone mt-3">The pieces our community reaches for again and again</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-gold hover:text-ivory transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
