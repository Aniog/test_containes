import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ReviewStars from '@/components/ui/ReviewStars'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const imagePromptId = `product-${product.slug}-card-prompt`

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-velmora-line bg-white/60 shadow-card transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-soft">
      <p id={imagePromptId} className="sr-only">
        {product.cardImagePrompt ?? product.imagePrompt ?? `Editorial jewelry photography of ${product.imageSubject} in warm gold on a neutral luxury background`}
      </p>
      <div className="relative overflow-hidden rounded-b-[1.4rem] rounded-t-[2rem] bg-velmora-panel">
        <Link to={`/shop/${product.slug}`} className="block aspect-[4/5] overflow-hidden">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.shortName}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
            data-strk-img-id={product.imageIds.primary}
            data-strk-img={`[${imagePromptId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-luxury group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.imageIds.secondary}
            data-strk-img={`[${imagePromptId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
          />
        </Link>

        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-100 transition-all duration-500 ease-luxury sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, product.variants[0])}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/85 px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink shadow-soft backdrop-blur transition-colors hover:bg-white"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-4 px-5 pb-6 pt-5 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
            <h3 id={product.query.titleId} className="mt-3 text-xs uppercase tracking-luxe text-velmora-ink sm:text-sm">
              {product.name}
            </h3>
          </div>
          <span className="text-sm text-velmora-ink">{formatPrice(product.price)}</span>
        </div>

        <p id={product.query.descId} className="text-sm leading-7 text-velmora-muted">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-velmora-muted">
            <ReviewStars rating={product.rating} />
            <span>{product.reviewCount}</span>
          </div>
          <Link
            to={`/shop/${product.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-velmora-ink transition-colors hover:text-velmora-gold"
          >
            View
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
