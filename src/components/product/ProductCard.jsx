import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice, placeholderSvg } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <article className="group relative text-velmora-ink">
      <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`product-main-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`product-hover-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <div className="absolute left-3 top-3 rounded-full bg-velmora-pearl/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-label text-velmora-ink">
            {product.badge}
          </div>
        </div>
      </Link>
      <div className="border-x border-b border-velmora-sand/70 bg-velmora-pearl px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id={titleId} className="font-serif text-base font-semibold uppercase tracking-product text-velmora-ink">
              {product.name}
            </h3>
            <p id={descId} className="mt-2 text-sm leading-6 text-velmora-cocoa/75">
              {product.subcategory}
            </p>
          </div>
          <p className="font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-4 flex w-full translate-y-1 items-center justify-center gap-2 rounded-full border border-velmora-ink/20 px-4 py-3 text-xs font-bold uppercase tracking-label text-velmora-ink opacity-100 transition duration-300 hover:border-velmora-goldDark hover:bg-velmora-ink hover:text-velmora-pearl md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}
