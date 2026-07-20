import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getProductImageUrl } from '@/lib/strk-image'
import { useCart } from '@/components/cart/CartContext'

export default function ProductCard({ product, priority = false, imageScope = 'product-card' }) {
  const { addItem } = useCart()
  const titleId = `${imageScope}-${product.id}-title`
  const descId = `${imageScope}-${product.id}-desc`

  return (
    <article className="group relative text-velmora-ink">
      <div className="overflow-hidden border border-velmora-line bg-velmora-pearl shadow-none transition duration-500 group-hover:-translate-y-1 group-hover:shadow-soft">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-bone">
          <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
            <img
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${descId}] [${titleId}] product jewelry warm editorial`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '650'}
              src={getProductImageUrl(product)}
            />
            <img
              alt={`${product.name} worn`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
              data-strk-img-id={product.hoverImgId}
              data-strk-img={`[${titleId}] jewelry worn on model warm close up`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '650'}
              src={getProductImageUrl(product, 'hover')}
            />
          </Link>
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => addItem(product)}
              className="block w-full bg-velmora-ink px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 border-x border-b border-velmora-line bg-velmora-ivory px-4 py-5">
        <div>
          <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-taupe">
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`}>
            <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.2em] text-velmora-ink">
              {product.name}
            </h3>
          </Link>
          <p id={descId} className="sr-only">
            {product.description}
          </p>
          <p className="mt-2 font-sans text-sm font-semibold text-velmora-ink">
            ${product.price}
          </p>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-velmora-line bg-velmora-pearl text-velmora-ink transition hover:border-velmora-champagne hover:bg-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={1.7} />
        </button>
      </div>
    </article>
  )
}
