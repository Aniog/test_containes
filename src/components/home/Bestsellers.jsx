import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'

export function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Curated for You</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Our Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {bestsellers.map((product) => (
            <article key={product.id} className="group relative">
              <Link to={`/products/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-velmora-linen">
                  <img
                    data-strk-img-id={`bestseller-${product.id}-thumb`}
                    data-strk-img={`[bestseller-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product, 1)
                      }}
                      className="w-full bg-velmora-charcoal py-3 text-xs font-semibold uppercase tracking-[0.1em] text-velmora-text-light transition-colors duration-300 hover:bg-velmora-gold hover:text-velmora-charcoal"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3
                    id={`bestseller-${product.id}-name`}
                    className="font-serif text-sm uppercase tracking-extra-wide text-velmora-text-dark"
                  >
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-center gap-2">
                    <StarRating rating={product.rating} size={12} />
                    <span className="text-xs text-velmora-text-muted">({product.reviews})</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-velmora-text-dark">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
