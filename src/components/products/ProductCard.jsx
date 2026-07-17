import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import RatingStars from '@/components/shared/RatingStars'

function ProductCard({ product, idPrefix = 'product-card' }) {
  const { addItem } = useCart()
  const titleId = `${idPrefix}-${product.slug}-title`
  const descId = `${idPrefix}-${product.slug}-desc`
  const primaryId = `${idPrefix}-${product.slug}-primary`
  const secondaryId = `${idPrefix}-${product.slug}-secondary`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-luxe border border-pearl bg-white/60 shadow-soft transition duration-500 ease-premium hover:-translate-y-1 hover:shadow-card">
      <div className="relative overflow-hidden bg-pearl/50">
        <Link to={`/products/${product.slug}`} className="block">
          <img
            alt={product.gallery[0].title}
            className="aspect-[4/5] w-full object-cover transition duration-500 ease-premium group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`${idPrefix}-${product.slug}-img-a`}
            data-strk-img={`[${primaryId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={product.gallery[1].title}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 ease-premium group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`${idPrefix}-${product.slug}-img-b`}
            data-strk-img={`[${secondaryId}] [${titleId}] [${descId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </Link>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-ivory/95 px-4 py-3 text-xs uppercase tracking-luxe text-velvet opacity-0 shadow-soft transition duration-300 ease-premium group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addItem(product)}
        >
          Quick Add
        </button>
        <span id={primaryId} className="sr-only">{product.gallery[0].description}</span>
        <span id={secondaryId} className="sr-only">{product.gallery[1].description}</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-3">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-luxe text-smoke">{product.category}</p>
            <Link to={`/products/${product.slug}`}>
              <h3 id={titleId} className="font-serif text-3xl uppercase tracking-luxe text-velvet">
                {product.name}
              </h3>
            </Link>
            <p id={descId} className="text-sm leading-7 text-smoke">
              {product.blurb}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-luxe text-velvet">{formatPrice(product.price)}</p>
          <Link
            to={`/products/${product.slug}`}
            className="text-xs uppercase tracking-luxe text-smoke transition hover:text-velvet"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
