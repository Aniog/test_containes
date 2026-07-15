import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/format'
import { getImageUrl } from '@/lib/useStrkImages'

function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative text-velmora-espresso">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-ivory shadow-soft">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getImageUrl(product.imgId)}
          />
          <img
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getImageUrl(product.hoverImgId)}
          />
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory shadow-glow transition hover:bg-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-parchment"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-brass">{product.type}</p>
        <h3 id={product.titleId} className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.2em] text-velmora-espresso md:text-xl">
          {product.name}
        </h3>
        <p id={product.descId} className="mt-2 min-h-10 text-sm leading-6 text-velmora-ink/80">
          {product.description}
        </p>
        <p className="mt-3 text-sm font-bold tracking-[0.14em] text-velmora-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

export default ProductCard
