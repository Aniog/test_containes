import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-velmora-linen overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] warm gold jewelry product on dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-velmora-black text-white text-[10px] font-sans font-semibold tracking-widest-xl uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="w-full py-2.5 bg-velmora-gold text-white text-[11px] font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="font-serif text-sm md:text-base tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 mt-1.5">
        <div className="flex items-center gap-0.5">
          <Star size={12} className="fill-velmora-gold text-velmora-gold" />
          <span className="text-xs font-sans text-velmora-slate">{product.rating}</span>
        </div>
        <span className="text-xs text-velmora-silver">({product.reviewCount})</span>
      </div>

      <p className="font-sans text-sm font-semibold text-velmora-black mt-1.5">
        {formatPrice(product.price)}
        {product.originalPrice && (
          <span className="ml-2 text-velmora-silver line-through font-normal">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </p>
    </Link>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
