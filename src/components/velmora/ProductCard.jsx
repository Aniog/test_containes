import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

export default function ProductCard({ product, onAdd, context = 'product-card' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const mainImageId = `${product.imgId}-${context}`
  const hoverImageId = `${product.hoverImgId}-${context}`

  return (
    <article className="group border border-velmora-espresso/10 bg-velmora-ivory text-velmora-espresso transition duration-500 hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment">
        <Link to={`/products/${product.id}`} className="block h-full text-velmora-espresso" aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
            data-strk-img-id={mainImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(mainImageId)}
          />
          <img
            alt={`${product.name} worn close-up`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
            data-strk-img-id={hoverImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(hoverImageId)}
          />
          <span className="absolute left-4 top-4 border border-velmora-champagne/50 bg-velmora-ivory/90 px-3 py-1 text-xs font-semibold uppercase tracking-luxury text-velmora-cocoa backdrop-blur">
            {product.badge}
          </span>
        </Link>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute inset-x-4 bottom-4 border border-velmora-champagne bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-ivory transition duration-300 hover:bg-velmora-cocoa md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <span className="flex items-center justify-center gap-2"><ShoppingBag className="h-4 w-4" /> Add to Cart</span>
        </button>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-luxury text-velmora-taupe">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-gold"><Star className="h-3.5 w-3.5 fill-current" /> {product.rating}</span>
        </div>
        <Link to={`/products/${product.id}`} className="block text-velmora-espresso hover:text-velmora-gold">
          <h3 id={titleId} className="font-serif text-xl uppercase leading-snug tracking-luxe md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="min-h-12 text-sm leading-6 text-velmora-taupe">{product.description}</p>
        <p className="font-semibold tracking-wide text-velmora-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
