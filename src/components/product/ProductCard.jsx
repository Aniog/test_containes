import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import { getStrkImageUrl } from '@/lib/strk-image'
import ProductImage from './ProductImage'
import StarRating from '@/components/common/StarRating'

const ProductCard = ({ product, priority = false }) => {
  const { addToCart } = useCart()
  const primaryImage = product.images[0]
  const secondaryImage = product.images[1]
  const hoverImage = secondaryImage
    ? { ...secondaryImage, id: `${secondaryImage.id}-detail-main` }
    : null
  const hoverSrc = hoverImage ? getStrkImageUrl(hoverImage.id) : null

  return (
    <article className="group space-y-4">
      <Link to={`/product/${product.handle}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-stone-100">
          <ProductImage
            image={primaryImage}
            title={product.name}
            description={`${product.description} ${product.category}`}
            query={`[${primaryImage.descId}] [${primaryImage.titleId}]`}
            className="aspect-[4/5]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart({ product, variant: product.variants[0] })
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-50/95 px-4 py-3 text-sm font-medium text-stone-900 shadow-[0_18px_40px_rgba(28,25,23,0.18)] backdrop-blur transition hover:bg-stone-50"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
          {hoverImage && hoverSrc && (
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-stone-200">
                <img
                  alt={hoverImage.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  src={hoverSrc}
                />
                <h3 id={secondaryImage.titleId} className="sr-only">
                  {`${product.name} ${secondaryImage.label}`}
                </h3>
                <p id={secondaryImage.descId} className="sr-only">
                  {`${product.description} styled on model`}
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="space-y-2 text-stone-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{product.category}</p>
            <Link to={`/product/${product.handle}`} className="mt-2 inline-block font-serif text-2xl uppercase tracking-[0.18em] text-stone-900 transition hover:text-amber-700">
              {product.name}
            </Link>
          </div>
          <span className="pt-2 text-lg text-stone-900">{formatCurrency(product.price)}</span>
        </div>
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

export default ProductCard
