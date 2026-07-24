import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group relative overflow-hidden bg-velmora-porcelain text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden velmora-image">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-bg-id={product.imageId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
            role="img"
            aria-label={product.name}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-bg-id={product.hoverImageId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
            role="img"
            aria-label={`${product.name} worn`}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product)
              }}
              className="w-full bg-velmora-porcelain/95 px-4 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-espresso shadow-glint backdrop-blur transition hover:bg-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-espresso"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className={compact ? 'space-y-2 p-4' : 'space-y-3 p-5'}>
        <div className="flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-velmora-deepgold">
          <span>{product.category}</span>
          <span>{product.material}</span>
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-base uppercase tracking-luxury text-velmora-espresso transition group-hover:text-velmora-deepgold md:text-lg">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className={compact ? 'sr-only' : 'line-clamp-2 text-sm leading-6 text-velmora-ink/75'}>
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between border-t border-velmora-champagne/70 pt-3">
          <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} stars`}>
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-semibold text-velmora-ink">{product.rating}</span>
          </div>
          <p className="font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
