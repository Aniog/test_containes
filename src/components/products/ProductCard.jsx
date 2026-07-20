import { ImageHelper } from '@strikingly/sdk'
import { ShoppingBag, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()
  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`
  const hoverId = `product-hover-desc-${product.id}`
  const imageContext = `[${descId}] [${titleId}]`

  return (
    <article className="group text-velmora-espresso">
      <span id={hoverId} className="sr-only">{product.name} styled on a model in warm editorial light</span>
      <Link to={`/product/${product.id}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-porcelain shadow-soft">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-primary-${product.id}-a81e2d`}
            data-strk-img={imageContext}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.id}-c74f6b`}
            data-strk-img={`[${hoverId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-porcelain/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wideLuxury text-velmora-espresso backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="border-x border-b border-velmora-taupe/30 bg-velmora-porcelain px-4 py-5 sm:px-5">
        <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
          <span className="ml-2 text-xs font-semibold text-velmora-umber">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="mt-3 font-serif text-xl uppercase tracking-velmora text-velmora-espresso transition group-hover:text-velmora-clay">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className={`${compact ? 'sr-only' : 'mt-2 line-clamp-2'} text-sm leading-6 text-velmora-umber`}>
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-velmora-espresso">${product.price}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-gold px-4 py-2 text-xs font-bold uppercase tracking-velmora text-velmora-espresso transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-gold"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </article>
  )
}
