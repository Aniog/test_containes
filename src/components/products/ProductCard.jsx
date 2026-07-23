import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import StrkImage from '@/components/common/StrkImage'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const query = `[${product.descId}] [${product.titleId}]`

  return (
    <article className="group rounded-t-full border border-velmora-line/75 bg-velmora-ivory text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative overflow-hidden rounded-t-full bg-velmora-champagne/60">
          <StrkImage
            id={product.imgId}
            query={query}
            ratio="3x4"
            width="700"
            alt={product.name}
            className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0 ${
              compact ? 'aspect-[4/5]' : 'aspect-[3/4]'
            }`}
          />
          <StrkImage
            id={product.hoverImgId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="3x4"
            width="700"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </Link>

      <div className="px-5 py-5 text-center">
        <p id={product.titleId} className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">
          {product.name}
        </p>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
          <span className="font-semibold text-velmora-ink">{formatPrice(product.price)}</span>
          <span className="h-px w-6 bg-velmora-line" />
          <span className="text-velmora-taupe">{product.category}</span>
        </div>
      </div>
    </article>
  )
}
