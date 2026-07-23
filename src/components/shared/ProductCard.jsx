import { Link } from 'react-router-dom'
import RatingStars from '@/components/shared/RatingStars'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/format'

function ProductCard({ product, sectionId = 'default', showQuickAdd = true }) {
  const { addItem } = useCart()
  const titleId = `${sectionId}-${product.slug}-title`
  const descId = `${sectionId}-${product.slug}-desc`
  const accentId = `${sectionId}-${product.slug}-accent`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-velmora-sand/40 bg-velmora-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <div className="relative overflow-hidden border-b border-velmora-sand/30 bg-velmora-mist">
        <Link aria-label={product.shortName} className="block" to={`/product/${product.slug}`}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.shortName}
              className="h-full w-full object-cover transition duration-500 group-hover:opacity-0"
              data-strk-img-id={product.imageIds.hero}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.shortName} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              data-strk-img-id={product.imageIds.alt}
              data-strk-img={`[${accentId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>

        <span className="absolute left-4 top-4 rounded-full border border-velmora-sand/40 bg-velmora-ivory/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-velmora-espresso">
          {product.badge}
        </span>

        {showQuickAdd ? (
          <button
            type="button"
            onClick={() => addItem(product)}
            className="absolute inset-x-4 bottom-4 rounded-full bg-velmora-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory opacity-100 transition md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            Add to Cart
          </button>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p id={accentId} className="sr-only">{product.caption}</p>
        <p id={descId} className="sr-only">{product.description}</p>
        <Link className="block" to={`/product/${product.slug}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-aubergine/70">{product.category}</p>
          <h3 id={titleId} className="mt-3 font-serif text-xl uppercase tracking-luxe text-velmora-ink">
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-aubergine/80">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-lg font-semibold text-velmora-espresso">{formatCurrency(product.price)}</span>
          <RatingStars className="gap-1.5 text-xs" rating={product.rating} reviewCount={product.reviewCount} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
