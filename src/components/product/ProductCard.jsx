import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group border border-sand bg-pearl text-ink shadow-[0_18px_45px_rgba(42,33,27,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(42,33,27,0.13)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductImage product={product} imageId={product.imgId} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" ratio="4x3" width="700" />
        </Link>
        <button type="button" onClick={() => onAddToCart(product)} className="absolute bottom-4 left-4 right-4 z-10 flex translate-y-0 items-center justify-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-porcelain opacity-100 transition duration-300 hover:bg-champagne hover:text-ink md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="space-y-3 px-5 py-5">
        <Link to={`/product/${product.slug}`} className="block">
          <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-[0.2em] text-ink transition hover:text-antique md:text-xl">{product.name}</h3>
        </Link>
        <p id={product.descId} className="min-h-12 text-sm leading-6 text-stone">{product.description}</p>
        <div className="flex items-center justify-between border-t border-sand pt-4">
          <span className="text-sm uppercase tracking-[0.18em] text-stone">{product.category}</span>
          <span className="font-medium text-ink">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
