import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StarRating from '@/components/common/StarRating'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product, priority = false }) => {
  const { addItem } = useCart()
  const { imageIds, contentIds } = product

  const quickAdd = () => {
    addItem(product, 1, product.tones[0])
  }

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[30px] bg-velmora-stone shadow-[0_18px_50px_rgba(61,47,39,0.08)]">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id={imageIds.primary}
              data-strk-img={`[${contentIds.desc}] [${contentIds.title}] [${contentIds.category}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '700'}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <img
              data-strk-img-id={imageIds.secondary}
              data-strk-img={`[${contentIds.desc}] [${contentIds.title}] [${contentIds.category}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '700'}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>
        </Link>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={quickAdd}
            className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-velmora-ivory/92 px-4 py-3 text-xs uppercase tracking-[0.28em] text-velmora-espresso shadow-lg backdrop-blur-sm transition hover:bg-velmora-espresso hover:text-velmora-champagne"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <p id={contentIds.category} className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={contentIds.title}
            className="mt-3 font-display text-2xl uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-champagne"
          >
            {product.name}
          </h3>
        </Link>
        <p id={contentIds.desc} className="mt-3 text-sm leading-7 text-velmora-muted">
          {product.details}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <StarRating rating={product.rating} reviews={product.reviews} />
          <span className="text-sm uppercase tracking-[0.28em] text-velmora-ink">
            ${product.price}
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
