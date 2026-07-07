import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ShoppingBag, Star } from 'lucide-react'
import { useCart } from './cart.jsx'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-2xl items-center text-center'
      : 'max-w-2xl items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="serif-title text-4xl leading-none sm:text-5xl">{title}</h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-velmora-umber sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export function StarRating({ rating, reviewCount, dark = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        dark ? 'text-velmora-pearl' : 'text-velmora-umber'
      }`}
    >
      <div className="flex items-center gap-1 text-velmora-bronze">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium text-current">{rating.toFixed(1)}</span>
      {reviewCount ? <span>({reviewCount})</span> : null}
    </div>
  )
}

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold uppercase tracking-[0.22em] text-velmora-espresso"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-umber transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden text-sm leading-7 text-velmora-umber">{children}</div>
      </div>
    </div>
  )
}

export function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()
  const titleId = `${product.id}-card-title`
  const descId = `${product.id}-card-desc`
  const hoverId = `${product.id}-card-hover`

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-velmora-sand bg-velmora-pearl text-velmora-espresso shadow-velmora-soft transition duration-500 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-t-[2rem] bg-velmora-mist">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            data-strk-img-id={product.imageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            fetchPriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${hoverId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between gap-4 bg-gradient-to-t from-[#1e1816]/88 via-[#1e1816]/25 to-transparent px-5 pb-5 pt-12 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl">
              Quick add
            </span>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product, 1, 'Gold Tone')
              }}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-velmora-pearl/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-3">
          <p className="eyebrow">{product.category}</p>
          <div className="space-y-2">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={titleId}
                className="font-display text-2xl uppercase tracking-[0.2em] text-velmora-espresso transition group-hover:text-velmora-bronze"
              >
                {product.name}
              </h3>
            </Link>
            <p id={descId} className="text-sm leading-6 text-velmora-umber">
              {product.description}
            </p>
            <span id={hoverId} className="sr-only">
              Warm editorial alternate jewelry styling image on a model with refined gold tones
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-velmora-sand pt-4 text-sm text-velmora-umber">
          <span>{product.material}</span>
          <span className="font-semibold text-velmora-espresso">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
