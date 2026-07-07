import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import RatingStars from '@/components/common/RatingStars'
import { formatPrice, getProductImageUrl } from '@/data/products.js?velmora=20260707'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, contextLabel = 'collection' }) {
  const { addItem } = useCart()
  const titleId = `product-${contextLabel}-${product.id}-title`
  const descId = `product-${contextLabel}-${product.id}-desc`
  const secondaryId = `product-${contextLabel}-${product.id}-secondary`

  const handleAdd = () => {
    addItem(product)
    toast.success(`${product.name} added to bag`)
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-velmora-espresso/10 bg-white/70 shadow-card backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            data-strk-img-id={`${product.imageIds.primary}-${contextLabel}-primary`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={getProductImageUrl(product, 'primary')}
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            data-strk-img-id={`${product.imageIds.secondary}-${contextLabel}-secondary`}
            data-strk-img={`[${secondaryId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={getProductImageUrl(product, 'secondary')}
          />
          <div className="pointer-events-none absolute inset-x-5 bottom-5 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="pointer-events-auto premium-button w-full gap-2"
              onClick={(event) => {
                event.preventDefault()
                handleAdd()
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-luxe text-velmora-espresso/60">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 id={titleId} className="font-serif text-xl uppercase tracking-luxe text-velmora-noir transition group-hover:text-velmora-gold">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="text-sm leading-6 text-velmora-espresso/75">{product.shortDescription}</p>
          <p id={secondaryId} className="sr-only">Editorial alternate angle of the jewelry worn on a model in warm light.</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-velmora-noir">{formatPrice(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <button type="button" className="rounded-full border border-velmora-espresso/10 p-3 text-velmora-noir transition hover:border-velmora-gold hover:text-velmora-gold md:hidden" onClick={handleAdd}>
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
