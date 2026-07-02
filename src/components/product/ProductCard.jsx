import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import { IMAGE_PLACEHOLDER, formatCurrency } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const primaryPromptId = `product-${product.id}-primary-prompt`
  const secondaryPromptId = `product-${product.id}-secondary-prompt`

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-stone-200/80 bg-stone-50 text-stone-900 shadow-[0_18px_60px_-36px_rgba(28,25,23,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_-34px_rgba(28,25,23,0.55)]">
      <div className="relative overflow-hidden rounded-t-[1.75rem] bg-stone-200">
        <Link to={`/products/${product.id}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <span id={primaryPromptId} aria-hidden="true" className="sr-only">
              {product.cardPrompts.primary}
            </span>
            <span id={secondaryPromptId} aria-hidden="true" className="sr-only">
              {product.cardPrompts.secondary}
            </span>
            <img
              alt={product.name}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
              data-strk-img-id={`card-${product.id}-primary`}
              data-strk-img={`[${primaryPromptId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="720"
              loading={priority ? 'eager' : 'lazy'}
              src={IMAGE_PLACEHOLDER}
            />
            <img
              alt={`${product.name} alternate view`}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              data-strk-img-id={`card-${product.id}-secondary`}
              data-strk-img={`[${secondaryPromptId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="720"
              src={IMAGE_PLACEHOLDER}
            />
          </div>
        </Link>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 z-10 hidden translate-y-3 opacity-0 transition duration-300 md:block md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Button
            className="w-full"
            onClick={() => addItem(product, { quantity: 1, variant: product.variants[0] })}
          >
            Quick Add
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-stone-500">
              {product.badge}
            </p>
            <Link to={`/products/${product.id}`} className="block">
              <h3 id={titleId} className="font-display text-xl uppercase tracking-[0.28em] text-stone-950 transition group-hover:text-stone-700">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-base font-medium text-stone-900">
            {formatCurrency(product.price)}
          </p>
        </div>

        <p id={descId} className="text-sm leading-6 text-stone-600">
          {product.shortDescription}
        </p>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-transparent px-4 py-3 text-xs font-medium uppercase tracking-[0.25em] text-stone-900 transition hover:border-stone-900 hover:bg-stone-100 md:hidden"
          onClick={() => addItem(product, { quantity: 1, variant: product.variants[0] })}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}
