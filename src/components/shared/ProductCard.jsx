import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import RatingStars from './RatingStars'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const productNameId = `product-${product.id}-name`
  const productDescriptionId = `product-${product.id}-description`
  const firstImageId = `product-${product.id}-image-primary`
  const secondImageId = `product-${product.id}-image-secondary`

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-50 text-stone-900 shadow-[0_18px_40px_rgba(28,25,23,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(28,25,23,0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Link
          to={`/shop/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="block h-full w-full"
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition duration-700',
              priority ? 'opacity-100' : 'opacity-100 group-hover:scale-[1.02]',
            )}
            data-strk-img-id={firstImageId}
            data-strk-img={`[${productDescriptionId}] [${productNameId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
            data-strk-img-id={secondImageId}
            data-strk-img={`[${productNameId}] [${productDescriptionId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 z-20 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, product.tones[0], 1)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-50 shadow-lg shadow-stone-950/20 transition hover:bg-stone-900"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>

      <Link
        to={`/shop/${product.slug}`}
        className="flex flex-1 flex-col gap-3 px-5 py-5 md:px-6"
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-stone-500">
            {product.category}
          </p>
          <h3
            id={productNameId}
            className="font-serif text-[1.6rem] uppercase tracking-[0.28em] text-stone-900"
          >
            {product.name}
          </h3>
        </div>

        <p id={productDescriptionId} className="text-sm leading-6 text-stone-600">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div className="space-y-2">
            <RatingStars rating={product.rating} reviews={product.reviews} />
            <p className="text-lg font-medium text-stone-900">
              {formatCurrency(product.price)}
            </p>
          </div>
          <span className="rounded-full border border-amber-300/60 bg-amber-100 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-900">
            Bestselling
          </span>
        </div>
      </Link>
    </article>
  )
}
