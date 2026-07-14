import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StarRating from '@/components/shared/StarRating'
import { getProductCardImage } from '@/data/imagePlaceholders'
import { useStore } from '@/context/StoreContext'

const ProductCard = ({ product, priorityLabel = 'Bestseller' }) => {
  const { addToCart } = useStore()
  const baseId = product.id
  const primaryImage = getProductCardImage(product.id, 'primary')
  const secondaryImage = getProductCardImage(product.id, 'secondary')

  return (
    <article className="group overflow-hidden rounded-[28px] border border-velmora-line bg-velmora-surface text-velmora-ink shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <Link to={`/shop/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-champagne">
          <span className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-velmora-ink/80 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-velmora-ivory backdrop-blur-sm">
            {priorityLabel}
          </span>
          <div className="relative aspect-[4/5]">
            <img
              alt={product.shortName}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0"
              src={primaryImage}
            />
            <img
              alt={`${product.shortName} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
              src={secondaryImage}
            />
          </div>
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-velmora-taupe">
                {product.category}
              </p>
              <Link to={`/shop/${product.id}`}>
                <h3
                  id={`${baseId}-name`}
                  className="mt-2 font-display text-2xl uppercase tracking-[0.22em] text-velmora-ink transition group-hover:text-velmora-gold"
                >
                  {product.name}
                </h3>
              </Link>
            </div>
            <span className="shrink-0 text-lg text-velmora-ink">
              ${product.price}
            </span>
          </div>
          <p id={`${baseId}-desc`} className="text-sm leading-6 text-velmora-muted">
            {product.description}
          </p>
          <p id={`${baseId}-details`} className="hidden">
            {product.details}
          </p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <button
          type="button"
          onClick={() => addToCart(product, 1, product.variants[0])}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
