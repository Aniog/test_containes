import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { formatPrice } from '@/lib/format'
import { getProductImageUrl } from '@/lib/stockImageConfig'
import { useStore } from './StoreProvider'
import RatingStars from './RatingStars'

const ProductCard = ({ product, scope = 'grid' }) => {
  const { addItem } = useStore()
  const imageTitleId = `${scope}-${product.slug}-title`
  const imageTypeId = `${scope}-${product.slug}-type`
  const primaryImageUrl = getProductImageUrl(product.slug, 0)
  const secondaryImageUrl = getProductImageUrl(product.slug, 1)

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-line/80 bg-pearl shadow-[0_18px_50px_rgba(29,25,22,0.06)] transition-all duration-500 ease-luxe hover:-translate-y-1 hover:shadow-velvet">
      <div className="relative overflow-hidden bg-mist/60">
        <Link to={`/product/${product.slug}`} className="block aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition-all duration-700 ease-luxe group-hover:scale-[1.02] group-hover:opacity-0"
            src={primaryImageUrl}
          />
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-luxe group-hover:scale-[1.02] group-hover:opacity-100"
            src={secondaryImageUrl}
          />
        </Link>
        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 rounded-full bg-bark/90 px-4 py-3 text-xs font-medium uppercase tracking-caps text-pearl opacity-100 transition-all duration-300 ease-luxe hover:bg-gold sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          onClick={() => addItem(product)}
        >
          Quick Add
        </button>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p id={imageTypeId} className="text-xs uppercase tracking-micro text-muted">
                {product.type}
              </p>
              <Link to={`/product/${product.slug}`}>
                <h3 id={imageTitleId} className="product-title mt-3 text-xl leading-tight sm:text-[1.45rem]">
                  {product.name}
                </h3>
              </Link>
            </div>
            <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-caps text-muted">
              {product.category}
            </span>
          </div>

          <p className="text-sm leading-6 text-muted">{product.shortDescription}</p>
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <div className="flex items-center justify-between border-t border-line pt-4">
          <span className="font-serif text-2xl text-ink">{formatPrice(product.price)}</span>
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-caps text-muted transition-colors duration-300 hover:text-gold"
          >
            View <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </article>
  )
}

export default ProductCard
