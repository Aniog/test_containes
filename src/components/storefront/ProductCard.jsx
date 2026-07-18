import React from 'react'
import { ShoppingBag, Star } from 'lucide-react'
import ProductArtwork from '@/components/storefront/ProductArtwork.jsx'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group overflow-hidden border border-velmora-linen bg-velmora-cream text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <a href={`/product/${product.id}`} className="block text-velmora-espresso" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <ProductArtwork product={product} variant="primary" className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <ProductArtwork product={product} variant="styled" className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 rounded-full bg-velmora-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-luxe text-velmora-cocoa backdrop-blur">
            {product.category}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </button>
        </div>
      </a>
      <div className={compact ? 'p-4' : 'p-5'}>
        <span id={product.contextId} className="sr-only">{product.imageContext}</span>
        <div className="mb-2 flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-semibold tracking-[0.12em] text-velmora-cocoa">{product.rating.toFixed(1)}</span>
        </div>
        <h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase leading-tight tracking-luxe text-velmora-espresso">
          {product.name}
        </h3>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-cocoa">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-linen pt-4">
          <span className="text-base font-semibold text-velmora-espresso">${product.price}</span>
          <span className="text-xs uppercase tracking-luxe text-velmora-cocoa">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
