import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductCard({ product, context = 'product-card' }) {
  const { addToCart } = useCart()
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-pearl shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:shadow-velmora">
        <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
          <div className="relative aspect-product overflow-hidden bg-velmora-linen/45">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
              data-strk-img-id={`${context}-${product.imgId}`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} styled`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
              data-strk-img-id={`${context}-${product.hoverImgId}`}
              data-strk-img={`[${titleId}] [${descId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-nav text-velmora-pearl opacity-0 shadow-glow transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          <span className="inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Add to Cart</span>
        </button>
      </div>
      <div className="pt-5">
        <div className="mb-2 flex items-center gap-1 text-velmora-gold">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-semibold text-velmora-cocoa">{product.rating} · {product.reviews}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-product text-velmora-ink transition hover:text-velmora-gold sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 min-h-10 text-sm leading-6 text-velmora-cocoa">{product.description}</p>
        <p className="mt-3 text-sm font-bold text-velmora-ink">${product.price}</p>
      </div>
    </article>
  )
}
