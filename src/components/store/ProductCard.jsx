import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '@/lib/format'

function StarRating({ value }) {
  return (
    <div className="flex items-center gap-1 text-velmora-accent">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-3.5 w-3.5 fill-current"
          strokeWidth={1.8}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-velmora-muted">{value.toFixed(1)}</span>
    </div>
  )
}

export default function ProductCard({
  product,
  context,
  sectionId,
  onAddToCart,
}) {
  const baseId = `${context}-${product.slug}`
  const nameId = `${baseId}-name`
  const categoryId = `${baseId}-category`
  const summaryId = `${baseId}-summary`
  const primaryLabelId = `${baseId}-primary-label`
  const secondaryLabelId = `${baseId}-secondary-label`

  const handleQuickAdd = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onAddToCart(product, product.tones[0], 1)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-line/70 bg-velmora-paper text-velmora-ink shadow-velmora-card transition duration-500 hover:-translate-y-1 hover:shadow-velmora-floating"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand/70">
        <span id={primaryLabelId} className="sr-only">
          {product.gallery[0]}
        </span>
        <span id={secondaryLabelId} className="sr-only">
          {product.gallery[1]}
        </span>

        <img
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02] group-hover:opacity-0"
          data-strk-img-id={`${baseId}-primary-image`}
          data-strk-img={`[${primaryLabelId}] [${summaryId}] [${nameId}] [${categoryId}] [${sectionId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
        />
        <img
          alt={`${product.name} alternate view`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
          data-strk-img-id={`${baseId}-secondary-image`}
          data-strk-img={`[${secondaryLabelId}] [${summaryId}] [${nameId}] [${categoryId}] [${sectionId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
        />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full translate-y-0 items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-sm font-medium text-velmora-paper shadow-lg transition duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p id={categoryId} className="text-xs uppercase tracking-editorial text-velmora-muted">
              {product.category}
            </p>
            <h3 id={nameId} className="font-serif text-[1.65rem] uppercase tracking-product text-velmora-ink sm:text-[1.8rem]">
              {product.name}
            </h3>
          </div>
          <p className="pt-1 text-sm font-semibold text-velmora-ink">
            {formatPrice(product.price)}
          </p>
        </div>

        <p id={summaryId} className="text-sm leading-6 text-velmora-muted">
          {product.summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-velmora-line/70 pt-4">
          <StarRating value={product.rating} />
          <span className="rounded-full bg-velmora-sand px-3 py-1 text-[0.68rem] uppercase tracking-editorial text-velmora-ink">
            {product.badge}
          </span>
        </div>
      </div>
    </Link>
  )
}
