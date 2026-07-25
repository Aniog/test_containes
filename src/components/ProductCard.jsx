import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice } from '../data/products'
import { resolveConfiguredImage } from '../lib/resolve-image'
import strkImgConfig from '../strk-img-config.json'

export default function ProductCard({ product, onAdd, onOpen }) {
  const primaryImage = resolveConfiguredImage(strkImgConfig, product.imgId)
  const hoverImage = resolveConfiguredImage(strkImgConfig, product.hoverImgId, [primaryImage]) || primaryImage

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-velmora-sand bg-velmora-pearl text-velmora-ink transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <button
        type="button"
        onClick={() => onOpen(product.id)}
        className="relative block aspect-[4/5] overflow-hidden bg-velmora-sand text-left"
        aria-label={`View ${product.name}`}
      >
        <img
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          src={primaryImage}
        />
        <img
          alt={`${product.name} worn close up`}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
          src={hoverImage}
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex items-center justify-center gap-2 rounded-full bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory shadow-glow">
            Quick view
          </span>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-velmora-bronze">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-ink">
            <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
            {product.rating}
          </span>
        </div>
        <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-[0.22em] text-velmora-ink">
          {product.name}
        </h3>
        <p id={product.descId} className="mt-3 flex-1 text-sm leading-6 text-velmora-espresso/80">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-sand pt-4">
          <p className="font-serif text-xl text-velmora-ink">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-full bg-velmora-champagne px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
