import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const placeholder = '/velmora-jewelry-fallback.svg'

export default function ProductCard({ product, onAddToCart }) {
  const contextId = `product-${product.id}-image-context`

  return (
    <article className="group relative flex h-full flex-col bg-velmora-ivory text-velmora-espresso shadow-[0_20px_50px_rgba(31,23,18,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(31,23,18,0.14)]">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-velmora-sand/30" aria-label={`View ${product.name}`}>
        <span id={contextId} className="sr-only">{product.name} {product.category} demi-fine jewelry product photography. {product.imageHint}</span>
        <img alt={product.name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id={`${product.imgId}-editorial-v2`} data-strk-img={`[${contextId}] [${product.descId}] [${product.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="800" src={placeholder} />
        <img alt={`${product.name} worn detail`} className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id={`${product.hoverImgId}-worn-v2`} data-strk-img={`[${contextId}] [${product.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="800" src={placeholder} />
      </Link>
      <div className="flex flex-1 flex-col gap-3 border-x border-b border-velmora-sand/70 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.28em] text-velmora-bronze">{product.category}</p>
            <Link to={`/product/${product.id}`}><h3 id={product.titleId} className="mt-2 font-serif text-xl uppercase tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-bronze">{product.name}</h3></Link>
          </div>
          <p className="font-sans text-sm font-semibold text-velmora-espresso">${product.price}</p>
        </div>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-ink/75">{product.shortDescription}</p>
        <button type="button" onClick={() => onAddToCart(product)} className="mt-auto inline-flex translate-y-2 items-center justify-center gap-2 border border-velmora-bronze bg-velmora-bronze px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory opacity-100 transition duration-300 hover:bg-velmora-espresso hover:text-velmora-ivory sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <ShoppingBag className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </article>
  )
}
