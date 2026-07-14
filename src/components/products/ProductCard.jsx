import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'
import { useStore } from '@/context/StoreContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useStore()
  const titleId = product.titleId
  const descId = product.descId

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-cream text-velmora-ink shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative overflow-hidden rounded-[2rem] rounded-b-[1.5rem] bg-velmora-soft">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={product.imgIds.primary}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={product.imgIds.secondary}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product.id, 'Gold', 1)}
          className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-velmora-panel px-5 py-3 text-sm font-medium text-velmora-cream opacity-0 shadow-card transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-velmora-gold">
              {product.category}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3
                id={titleId}
                className="mt-3 font-display text-[1.65rem] uppercase tracking-[0.22em] text-velmora-ink"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="pt-1 text-base font-medium text-velmora-ink">${product.price}</p>
        </div>
        <p id={descId} className="mt-3 min-h-[3rem] text-sm leading-6 text-velmora-muted">
          {product.shortDescription}
        </p>
        <div className="mt-5">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
