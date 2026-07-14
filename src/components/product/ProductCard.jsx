import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/components/cart/CartContext.jsx'
import { formatPrice } from '@/data/products.js'

const ProductImage = ({ product, prefix }) => {
  const titleId = `${prefix}-${product.id}-title`
  const descId = `${prefix}-${product.id}-desc`

  return (
    <div className="group/image relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-velmora-linen">
      <img
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover/image:scale-105 group-hover/image:opacity-0"
        data-strk-img-id={`${prefix}-${product.imageId}`}
        data-strk-img={`[${descId}] [${titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <img
        alt={`${product.name} worn detail`}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover/image:scale-105 group-hover/image:opacity-100"
        data-strk-img-id={`${prefix}-${product.hoverImageId}`}
        data-strk-img={`[${titleId}] [${descId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">
        <QuickAdd product={product} />
      </div>
      <span id={descId} className="sr-only">{product.description}</span>
      <span id={titleId} className="sr-only">{product.name}</span>
    </div>
  )
}

const QuickAdd = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        addToCart(product)
      }}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-porcelain/95 px-5 py-3 text-[0.68rem] font-bold uppercase tracking-velmora text-velmora-ink shadow-soft backdrop-blur transition hover:bg-velmora-gold"
    >
      <ShoppingBag className="h-4 w-4" />
      Add to Cart
    </button>
  )
}

const ProductCard = ({ product, prefix = 'card' }) => (
  <article className="group text-velmora-ink">
    <Link to={`/products/${product.slug}`} className="block">
      <ProductImage product={product} prefix={prefix} />
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4 text-xs uppercase tracking-product text-velmora-clay">
          <span>{product.category}</span>
          <span className="inline-flex items-center gap-1 text-velmora-gold">
            <Star className="h-3.5 w-3.5 fill-current" /> {product.rating}
          </span>
        </div>
        <h3 className="font-serif text-xl uppercase leading-snug tracking-product text-velmora-ink transition group-hover:text-velmora-gold">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-velmora-clay">{product.description}</p>
        <p className="mt-3 text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  </article>
)

export default ProductCard
