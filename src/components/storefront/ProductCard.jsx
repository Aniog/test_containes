import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/format.js'
import { getStrkImageUrl } from '@/lib/strkImage.js'
import { useCart } from '@/context/CartContext.jsx'
import StarRating from '@/components/storefront/StarRating.jsx'

const ProductCard = ({
  product,
  priority = false,
  titleId,
  descId,
  primaryImageId,
  secondaryImageId,
}) => {
  const { addItem } = useCart()
  const productPath = `/product/${product.slug}`
  const primaryImageSrc = getStrkImageUrl(primaryImageId) || getStrkImageUrl(secondaryImageId)
  const secondaryImageSrc = getStrkImageUrl(secondaryImageId) || primaryImageSrc

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-champagne/30 bg-white/80 text-espresso shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(33,25,20,0.12)]">
      <Link to={productPath} className="relative overflow-hidden rounded-t-[28px] bg-mist/60">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={primaryImageSrc}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
          />
          <img
            src={secondaryImageSrc}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 px-4 pb-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-full bg-ivory/95 px-4 py-3 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-espresso shadow-lg backdrop-blur">
            Hover to reveal a second look
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{product.category}</p>
        <Link to={productPath}>
          <h3 id={titleId} className="mt-3 font-serif text-xl uppercase tracking-[0.26em] text-espresso md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 text-sm leading-7 text-ink-soft">
          {product.shortDescription}
        </p>
        <div className="mt-4">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-ink-soft">From</p>
            <p className="mt-2 text-lg font-medium text-espresso">{formatPrice(product.price)}</p>
          </div>
          <button
            type="button"
            onClick={() => addItem(product, product.variants[0], 1)}
            className="inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-ivory px-4 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-espresso transition hover:border-gold hover:bg-gold hover:text-ivory"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
