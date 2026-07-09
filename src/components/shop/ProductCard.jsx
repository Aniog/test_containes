import { Link } from 'react-router-dom'
import { formatPrice, svgPlaceholder } from '@/data/storefront'
import { useCart } from '@/context/CartContext.jsx'
import RatingStars from '@/components/shared/RatingStars.jsx'

function ProductCard({ product, imageScope = 'grid' }) {
  const { addItem } = useCart()
  const titleId = `${imageScope}-${product.slug}-title`
  const descId = `${imageScope}-${product.slug}-desc`
  const primaryId = `${imageScope}-${product.slug}-primary-7ad1`
  const secondaryId = `${imageScope}-${product.slug}-secondary-4f21`

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-border bg-surface p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-panel">
        <Link className="block" to={`/product/${product.slug}`}>
          <div className="relative aspect-card overflow-hidden">
            <img
              alt={`${product.name} primary view`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-id={primaryId}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={svgPlaceholder}
            />
            <img
              alt={`${product.name} styled view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              data-strk-img={`[${titleId}] [${descId}] editorial jewelry on model`}
              data-strk-img-id={secondaryId}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={svgPlaceholder}
            />
          </div>
        </Link>
        <button
          className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center rounded-full bg-shadow/88 px-4 py-3 text-xs font-medium uppercase tracking-micro text-cream transition hover:bg-shadow sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          onClick={() => addItem(product)}
          type="button"
        >
          Add to cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <p className="eyebrow">{product.category}</p>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-[10px] uppercase tracking-micro text-truffle">
              {product.badge}
            </span>
          </div>
          <Link to={`/product/${product.slug}`}>
            <h3
              className="font-display text-xl uppercase tracking-product text-ink transition group-hover:text-accent"
              id={titleId}
            >
              {product.name}
            </h3>
          </Link>
          <p className="text-sm leading-7 text-muted" id={descId}>
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <p className="text-base font-medium text-truffle">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
