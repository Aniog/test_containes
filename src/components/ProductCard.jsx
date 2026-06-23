import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import { getStrkImageUrl } from '@/lib/strkImages'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const cardPrimaryImageId = product.media?.cardPrimary ?? product.imageIds.hero
  const cardSecondaryImageId = product.media?.cardSecondary ?? product.imageIds.alt

  return (
    <article className="group rounded-[1.75rem] border border-brand-line bg-brand-surface text-brand-espresso shadow-soft transition duration-300 hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] rounded-b-none bg-brand-sand/70">
          <img
            alt={product.name}
            className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
            src={getStrkImageUrl(cardPrimaryImageId)}
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-[340px] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
            src={getStrkImageUrl(cardSecondaryImageId)}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-umber/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="space-y-4 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">
              {product.category}
            </p>
            <Link to={`/products/${product.id}`}>
              <h3
                id={titleId}
                className="mt-2 font-serif text-xl uppercase tracking-[0.24em] text-brand-espresso"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-lg font-medium text-brand-espresso">
            {formatPrice(product.price)}
          </span>
        </div>

        <p id={descId} className="text-sm leading-6 text-brand-mink">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between gap-3">
          <StarRating rating={product.rating} count={product.reviewCount} />
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full border border-brand-line px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-espresso transition hover:border-brand-bronze hover:bg-brand-bronze/10"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
