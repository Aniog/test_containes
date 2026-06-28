import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'
import StockImage from './StockImage.jsx'
import Stars from './Stars.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const primaryImage = product.images[0]
  const secondaryImage = product.images[1] || product.images[0]

  const handleQuickAdd = (event) => {
    event.preventDefault()
    addToCart(product, product.variants[0], 1)
  }

  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-stone-100 shadow-[0_20px_50px_rgba(28,25,23,0.08)]">
          <div className="relative aspect-[4/5]">
            <div className="absolute inset-0 transition duration-500 group-hover:opacity-0">
              <StockImage
                slotId={`card-${product.id}-primary`}
                imageId={primaryImage.id}
                title={primaryImage.title}
                description={primaryImage.description}
                ratio={primaryImage.ratio}
                width={primaryImage.width}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <StockImage
                slotId={`card-${product.id}-secondary`}
                imageId={secondaryImage.id}
                title={secondaryImage.title}
                description={secondaryImage.description}
                ratio={secondaryImage.ratio}
                width={secondaryImage.width}
                alt={`${product.name} alternate view`}
                className="h-full w-full object-cover"
              />
            </div>
            <button
              type="button"
              onClick={handleQuickAdd}
              className="absolute bottom-4 left-4 right-4 rounded-full bg-stone-950 px-5 py-3 text-xs uppercase tracking-[0.24em] text-amber-200 opacity-100 shadow-lg transition hover:bg-stone-900 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 px-2 pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone-500">
            {product.category}
          </p>
          <p className="text-sm font-medium text-stone-900">{formatPrice(product.price)}</p>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-serif text-xl uppercase tracking-[0.2em] text-stone-950 transition group-hover:text-stone-700">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm leading-7 text-stone-600">{product.description}</p>
        <Stars rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}
