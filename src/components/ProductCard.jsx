import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StockImage from './StockImage'
import Stars from './Stars'

function ProductCard({ product, onAddToCart, priority = false }) {
  const primaryImageRef = useRef(null)
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const categoryId = `product-${product.slug}-category`
  const primaryImageQuery = `[${descId}] [${titleId}] [${categoryId}]`
  const secondaryImageQuery = `[${descId}] [${titleId}] [${categoryId}]`

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-velmora-line/70 bg-velmora-ivory text-velmora-ink shadow-[0_30px_70px_rgba(36,27,24,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(36,27,24,0.14)]">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden rounded-t-[1.75rem] bg-velmora-sand">
        <div className="relative aspect-[4/5] overflow-hidden">
          <StockImage
            alt={product.name}
            imgId={product.imageId}
            query={primaryImageQuery}
            ratio="4x3"
            width="900"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            loading={priority ? 'eager' : 'lazy'}
            imgRef={primaryImageRef}
          />
          <StockImage
            alt={`${product.name} alternate view`}
            imgId={product.hoverImageId}
            query={secondaryImageQuery}
            ratio="4x3"
            width="900"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-0 opacity-100 transition duration-500 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full border border-velmora-gold/70 bg-velmora-ink px-4 py-3 text-xs uppercase tracking-[0.28em] text-velmora-cream shadow-[0_14px_30px_rgba(0,0,0,0.24)] transition hover:bg-velmora-gold hover:text-velmora-ink"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product, 1, product.variants[0], primaryImageRef.current?.currentSrc || primaryImageRef.current?.src || '')
            }}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="space-y-2">
          <p id={categoryId} className="text-xs uppercase tracking-[0.28em] text-velmora-mute">
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`} className="block">
            <h3
              id={titleId}
              className="font-display text-[1.7rem] uppercase leading-none tracking-[0.24em] text-velmora-ink"
            >
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="text-sm leading-7 text-velmora-mute">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div className="space-y-2">
            <Stars rating={product.rating} reviewCount={product.reviewCount} />
            <p className="text-lg font-medium tracking-[0.12em] text-velmora-ink">
              ${product.price}
            </p>
          </div>
          <Link
            to={`/product/${product.slug}`}
            className="text-xs uppercase tracking-[0.28em] text-velmora-gold-deep transition hover:text-velmora-ink"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
