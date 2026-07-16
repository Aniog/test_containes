import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

const bestsellers = products.filter((p) => p.tags.includes('bestseller'))

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(null)

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-charcoal">
          Bestsellers
        </h2>
        <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
        <p className="text-sm text-taupe mt-4 font-sans max-w-md mx-auto">
          The pieces our customers love most — and keep coming back to gift.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              {/* Image container */}
              <div className="aspect-[3/4] bg-stone overflow-hidden relative mb-4">
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  data-strk-img={`[bs-desc-${product.id}] [bs-name-${product.id}] bestsellers`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  data-strk-img-id={`bs-${product.id}-img`}
                />
              </div>

              {/* Product info */}
              <p
                className="font-serif text-sm tracking-wider uppercase text-charcoal"
                id={`bs-name-${product.id}`}
              >
                {product.name}
              </p>
              <p className="sr-only" id={`bs-desc-${product.id}`}>{product.description}</p>
              <p className="text-xs text-taupe mt-1">{product.subcategory}</p>
              <p className="font-sans text-sm font-medium text-charcoal mt-1.5">
                ${product.price}
              </p>
            </Link>

            {/* Quick add button */}
            <button
              onClick={(e) => { e.preventDefault(); addItem(product) }}
              className={`absolute bottom-16 left-1/2 -translate-x-1/2 bg-cream/95 text-charcoal px-4 py-2.5 font-sans text-[11px] tracking-wider uppercase shadow-lg transition-all duration-300 ${
                hovered === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              <ShoppingBag className="w-3 h-3 inline mr-1.5" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block px-8 py-3 border border-charcoal/20 text-charcoal font-sans text-xs tracking-wider uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
        >
          View All Pieces
        </Link>
      </div>
    </section>
  )
}