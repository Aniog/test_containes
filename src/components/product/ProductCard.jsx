import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductImage from '@/components/product/ProductImage'
import RatingStars from '@/components/product/RatingStars'
import { useCart } from '@/lib/cart'

export default function ProductCard({ product, elevated = false }) {
  const { addItem, toCurrency } = useCart()
  const titleId = `product-${product.id}-title`
  const primaryCaptionId = `product-${product.id}-primary-caption`
  const secondaryCaptionId = `product-${product.id}-secondary-caption`
  const primaryCaption = product.gallery[0]?.caption || product.searchText
  const secondaryCaption = product.gallery[1]?.caption || product.searchText

  return (
    <article className={`group text-velmora-espresso ${elevated ? 'rounded-sm bg-velmora-pearl p-3 shadow-soft' : ''}`}>
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-ivory">
          <ProductImage
            id={`product-card-primary-${product.id}`}
            titleId={titleId}
            captionId={primaryCaptionId}
            caption={primaryCaption}
            alt={product.name}
            ratio="4x3"
            width="700"
            className="transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
            <ProductImage
              id={`product-card-secondary-${product.id}`}
              titleId={titleId}
              captionId={secondaryCaptionId}
              caption={secondaryCaption}
              alt={`${product.name} alternate view`}
              ratio="4x3"
              width="700"
              className="scale-105 transition duration-700 group-hover:scale-100"
            />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addItem(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-pearl/95 px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso opacity-0 shadow-soft backdrop-blur transition duration-300 hover:bg-velmora-espresso hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" /> Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id={titleId} className="text-sm font-bold uppercase tracking-luxury text-velmora-espresso">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-velmora-mocha">{product.category}</p>
          </div>
          <p className="text-sm font-semibold text-velmora-espresso">{toCurrency(product.price)}</p>
        </div>
        <div className="mt-3">
          <RatingStars rating={product.rating} reviews={product.reviews} compact />
        </div>
      </div>
    </article>
  )
}
