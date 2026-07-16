import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { placeholderSvg } from '@/data/products'
import Stars from './Stars'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group bg-velmora-ivory text-velmora-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-product overflow-hidden bg-velmora-linen">
          <img
            alt={product.name}
            className="image-fill transition-opacity duration-500 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} worn close-up`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <div className="absolute left-4 top-4 bg-velmora-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-nav text-velmora-clay backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div>
            <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-product text-velmora-ink sm:text-xl">
              {product.name}
            </h3>
            <p id={product.descId} className={compact ? 'sr-only' : 'mt-1 line-clamp-2 text-sm leading-6 text-velmora-clay'}>
              {product.description}
            </p>
          </div>
          <p className="shrink-0 font-serif text-xl text-velmora-ink">${product.price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Stars rating={product.rating} compact />
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 border border-velmora-gold px-3 py-2 text-[10px] font-semibold uppercase tracking-nav text-velmora-ink opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-ivory sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
