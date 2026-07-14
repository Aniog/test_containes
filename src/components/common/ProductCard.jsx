import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { currency } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import StarRating from './StarRating.jsx'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const containerRef = useStrkImages([hovered])

  const activeImage = useMemo(() => {
    if (hovered && product.gallery[1]) {
      return product.gallery[1]
    }

    return product.gallery[0]
  }, [hovered, product.gallery])

  const titleId = `${product.id}-title`
  const descId = `${product.id}-desc`
  const badgeId = `${product.id}-badge`

  return (
    <article
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-[2rem] border border-mist bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-panel"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-sand">
          <img
            alt={activeImage.alt}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            data-strk-img-id={`${activeImage.id}-card`}
            data-strk-img={`[${descId}] [${titleId}] [${badgeId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-obsidian/86 px-4 py-3 text-[0.68rem] uppercase tracking-brand text-ivory opacity-0 transition duration-300 group-hover:opacity-100">
            Quick add
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>

      <div className="px-1 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p id={badgeId} className="text-xs uppercase tracking-brand text-bronze">
              {product.badge}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3 id={titleId} className="mt-3 font-serif text-[1.65rem] uppercase tracking-[0.2em] text-ink transition group-hover:text-bronze">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-sm font-semibold text-ink">{currency.format(product.price)}</p>
        </div>
        <p id={descId} className="mt-3 text-sm leading-6 text-ink/72">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <StarRating rating={product.rating} reviews={product.reviews} />
          <button
            type="button"
            onClick={() => addItem(product, product.tones[0], 1)}
            className="rounded-full border border-ink/15 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
