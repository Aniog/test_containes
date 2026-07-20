import { Link } from 'react-router-dom'
import { formatPrice } from '../../lib/products'
import { cn, imagePlaceholder } from '../../lib/utils'
import { useCart } from '../cart/CartContext'

export default function ProductCard({ className, contextKey, product, sectionTitleId }) {
  const { addItem } = useCart()
  const titleId = `${contextKey}-${product.slug}-title`
  const descId = `${contextKey}-${product.slug}-desc`
  const imageQuery = [
    `[${descId}]`,
    `[${titleId}]`,
    sectionTitleId ? `[${sectionTitleId}]` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={cn('group flex flex-col', className)}>
      <div className="overflow-hidden rounded-3xl border border-sandDeep/70 bg-white/70 shadow-card transition duration-300 ease-luxe group-hover:-translate-y-1">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden bg-sand">
            <img
              src={imagePlaceholder}
              alt={product.name}
              data-strk-img-id={`${contextKey}-${product.slug}-primary`}
              data-strk-img={imageQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-0"
            />
            <img
              src={imagePlaceholder}
              alt={`${product.name} styled view`}
              data-strk-img-id={`${contextKey}-${product.slug}-secondary`}
              data-strk-img={`${imageQuery} [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-luxe group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
        </Link>

        <div className="space-y-4 px-4 py-5 md:px-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-rosewood">
                {product.category}
              </p>
              <Link to={`/product/${product.slug}`}>
                <h3 id={titleId} className="mt-2 font-display text-base uppercase tracking-luxe text-ink">
                  {product.shortName}
                </h3>
              </Link>
              <p id={descId} className="mt-2 text-sm leading-6 text-ink/70">
                {product.shortDescription}
              </p>
            </div>
            <p className="whitespace-nowrap text-sm font-medium text-ink">
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => addItem(product, 1, product.variants[0])}
            className="luxe-button w-full md:opacity-0 md:group-hover:opacity-100"
          >
            Quick Add
          </button>
        </div>
      </div>
    </article>
  )
}
