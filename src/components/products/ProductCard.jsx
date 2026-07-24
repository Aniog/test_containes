import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext.jsx'
import StarRating from '@/components/shared/StarRating.jsx'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const baseId = `product-${product.slug}`
  const primarySceneId = `${baseId}-scene-primary`
  const hoverSceneId = `${baseId}-scene-hover`

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-velmora-line/30 bg-white/55 p-3 shadow-soft transition duration-500 ease-luxe hover:-translate-y-1 hover:border-velmora-gold/50 hover:shadow-velmora">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-[1.6rem] bg-velmora-champagne">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 ease-luxe group-hover:scale-[1.03]"
            data-strk-img-id={`${baseId}-main-c1a`}
            data-strk-img={`[${primarySceneId}] [${baseId}-title] [${baseId}-category]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            loading={priority ? 'eager' : 'lazy'}
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-luxe group-hover:opacity-100"
            data-strk-img-id={`${baseId}-hover-d7f`}
            data-strk-img={`[${hoverSceneId}] [${baseId}-title] [${baseId}-category]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="720"
            loading="lazy"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
          />
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            addItem(product, 'Gold', 1)
          }}
          className="absolute inset-x-4 bottom-4 hidden translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-ink px-4 py-3 text-xs uppercase tracking-[0.28em] text-velmora-cream opacity-0 transition duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100 md:flex"
        >
          <ShoppingBag className="h-4 w-4" />
          Quick add
        </button>
      </Link>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <p
          id={`${baseId}-category`}
          className="text-[0.68rem] uppercase tracking-[0.28em] text-velmora-gold"
        >
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="mt-3 block">
          <h3
            id={`${baseId}-title`}
            className="font-serif text-[1.15rem] uppercase tracking-[0.22em] text-velmora-espresso transition group-hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`${baseId}-description`}
          className="mt-3 text-sm leading-6 text-velmora-espresso/72"
        >
          {product.shortDescription}
        </p>
        <span id={primarySceneId} aria-hidden="true" className="sr-only">
          {product.cardScene}
        </span>
        <span id={hoverSceneId} aria-hidden="true" className="sr-only">
          {product.hoverScene}
        </span>
        <div className="mt-4">
          <StarRating rating={product.rating} reviewCount={product.reviews} compact />
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-velmora-espresso">
            {formatPrice(product.price)}
          </p>
          <button
            type="button"
            onClick={() => addItem(product, 'Gold', 1)}
            className="rounded-full border border-velmora-line/50 px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-velmora-espresso transition hover:border-velmora-gold hover:bg-velmora-champagne md:hidden"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
