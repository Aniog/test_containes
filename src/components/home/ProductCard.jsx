import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { getProductImageKey } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strk-images'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const primaryImageUrl = getStrkImageUrl(getProductImageKey(product.slug, 'primary'))
  const secondaryImageUrl = getStrkImageUrl(getProductImageKey(product.slug, 'secondary'))

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-ivory text-velmora-ink shadow-velmora-sm transition duration-300 hover:-translate-y-1 hover:shadow-velmora-lg">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-0"
            src={primaryImageUrl}
          />
          <img
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            src={secondaryImageUrl}
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full bg-velmora-ivory/94 px-4 py-3 opacity-0 shadow-velmora-sm transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs uppercase tracking-[0.32em] text-velmora-ink/70">
              Quick add
            </span>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addItem(product)
              }}
              className="rounded-full bg-velmora-bronze px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-bronze-dark"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-4 px-5 pb-5 pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-velmora-sand px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-velmora-ink/68">
            {product.badge}
          </span>
          <div className="flex items-center gap-1 text-xs text-velmora-ink/65">
            <Star className="h-3.5 w-3.5 fill-velmora-bronze text-velmora-bronze" />
            <span>
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-serif text-[1.45rem] uppercase tracking-[0.2em] text-velmora-espresso">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-sm uppercase tracking-[0.28em] text-velmora-ink/50">
            {product.category}
          </p>
          <p className="mt-3 text-sm leading-7 text-velmora-ink/72">{product.shortDescription}</p>
          <p className="mt-4 text-base font-medium text-velmora-espresso">
            ${product.price}
          </p>
        </div>
      </div>
    </article>
  )
}
