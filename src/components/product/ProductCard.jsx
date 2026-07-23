import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { getStrkImage } from '@/lib/strkImages.js'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart()

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden bg-velmora-blush shadow-soft">
        <Link to={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            className={`w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0 ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={getStrkImage(product.imgId)}
          />
          <img
            className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
            alt={`${product.name} worn`}
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={getStrkImage(product.hoverImgId)}
          />
        </Link>
        <button
          type="button"
          className="velmora-focus absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-widest text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-antique group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addItem(product)}
        >
          <ShoppingBag className="h-4 w-4" /> Add to Cart
        </button>
      </div>
      <div className="pt-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs text-velmora-smoke">
          <span>{product.category}</span>
          <span className="inline-flex items-center gap-1 text-velmora-antique"><Star className="h-3 w-3 fill-current" /> {product.rating}</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-antique">{product.name}</h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-smoke">{product.shortDescription}</p>
        <p className="mt-3 text-sm font-semibold text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
