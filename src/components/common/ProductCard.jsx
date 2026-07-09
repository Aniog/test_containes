import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { getPickedImageUrl } from '@/data/products'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const badgeId = `product-${product.id}-badge`
  const primaryImageId = `product-card-primary-${product.id}`
  const secondaryImageId = `product-card-secondary-${product.id}`
  const primaryImageSrc = getPickedImageUrl(primaryImageId)
  const secondaryImageSrc = getPickedImageUrl(secondaryImageId) || primaryImageSrc

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-xl shadow-stone-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden">
        <div className="relative aspect-[4/5] bg-stone-200">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}] [${badgeId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            loading={priority ? 'eager' : 'lazy'}
            src={primaryImageSrc}
          />
          <img
            alt={`${product.name} styling detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${titleId}] [${descId}] warm editorial jewelry on model`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            loading="lazy"
            src={secondaryImageSrc}
          />
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-stone-950/75 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-stone-100 backdrop-blur-sm">
          <span id={badgeId}>{product.badge}</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            {product.category}
          </p>
          <div className="space-y-2">
            <h3
              id={titleId}
              className="font-display text-[1.65rem] uppercase tracking-[0.22em] text-stone-950"
            >
              <Link to={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
            <p id={descId} className="text-sm leading-6 text-stone-600">
              {product.cardDescription}
            </p>
          </div>
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Price
            </p>
            <p className="mt-1 text-lg font-medium text-stone-950">
              {formatPrice(product.price)}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-stone-950 bg-stone-950 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-50 transition duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-stone-950"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
