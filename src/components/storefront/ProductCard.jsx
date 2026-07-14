import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/storeData.js'
import { useCart } from '@/context/CartContext.jsx'
import StarRating from './StarRating.jsx'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function ProductCard({ product }) {
  const { addItem } = useCart()
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const altId = `product-${product.slug}-alt`

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-[2rem] bg-stone-900 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={placeholder}
              alt={product.shortName}
              data-strk-img-id={product.imageId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
            />
            <img
              src={placeholder}
              alt={`${product.shortName} alternate view`}
              data-strk-img-id={product.hoverImageId}
              data-strk-img={`[${altId}] [${titleId}] [${descId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            />
          </div>
        </Link>

        <button
          type="button"
          onClick={() => addItem(product, 1, 'Gold')}
          className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-stone-50 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-950 opacity-100 transition hover:bg-amber-200 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-stone-500">{product.category}</p>
            <Link to={`/product/${product.slug}`}>
              <h3 id={titleId} className="mt-2 font-serif text-2xl tracking-[0.24em] text-stone-900 transition group-hover:text-stone-700">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="mt-1 text-sm uppercase tracking-[0.2em] text-stone-800">{formatPrice(product.price)}</span>
        </div>
        <p id={descId} className="mt-3 text-sm leading-7 text-stone-600">{product.description}</p>
        <p id={altId} className="sr-only">Model wearing warm gold jewelry with editorial lighting</p>
        <div className="mt-4">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
