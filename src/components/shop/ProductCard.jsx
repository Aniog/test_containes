import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useStore } from '@/context/StoreContext'
import { formatCurrency } from '@/lib/format'
import Stars from '@/components/common/Stars'

const ProductCard = ({ product, sectionTitleId, sectionDescId, priority = false }) => {
  const { addToCart } = useStore()
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const categoryId = `product-${product.slug}-category`
  const imageQuery = `[${descId}] [${titleId}] [${sectionDescId}] [${sectionTitleId}]`

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-velmora-line/80 bg-white/80 p-3 shadow-velmora-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-[1.5rem] bg-velmora-cream">
        <img
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          data-strk-img-id={product.imageIds.primary}
          data-strk-img={imageQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? '720' : '560'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.name} alternate view`}
          className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          data-strk-img-id={product.imageIds.secondary}
          data-strk-img={imageQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? '720' : '560'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 rounded-full bg-velmora-ivory px-4 py-3 text-xs font-semibold uppercase tracking-velmora text-velmora-ink opacity-100 transition-all duration-300 hover:bg-velmora-gold md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={(event) => {
            event.preventDefault()
            addToCart(product, 'Gold', 1)
          }}
        >
          Quick Add
        </button>
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-4 px-1 pb-1 pt-5">
        <div className="space-y-3">
          <p id={categoryId} className="text-xs uppercase tracking-[0.18em] text-velmora-stone">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <Link
                id={titleId}
                to={`/product/${product.slug}`}
                className="font-serif text-2xl uppercase tracking-velmora text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
              >
                {product.name}
              </Link>
              <p id={descId} className="mt-2 text-sm leading-7 text-velmora-stone">
                {product.description}
              </p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-velmora-ink">
              {formatCurrency(product.price)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-velmora-line/80 pt-4">
          <div className="flex items-center gap-2 text-sm text-velmora-stone">
            <Stars className="h-3.5 w-3.5" />
            <span>{product.rating}</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-velmora-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-velmora text-velmora-ink transition-all duration-300 hover:border-velmora-gold hover:bg-velmora-cream"
            onClick={() => addToCart(product, 'Gold', 1)}
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
