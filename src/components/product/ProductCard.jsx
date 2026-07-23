import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getStrkImageUrl } from '../../lib/strk-images.js'

export default function ProductCard({ product, onAddToCart, context = 'card' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const tagId = `${context}-${product.id}-tag`
  const imageId = `${context}-${product.imageId}`
  const hoverImageId = `${context}-${product.hoverImageId}`

  const handleAdd = (event) => {
    event.preventDefault()
    onAddToCart(product, 1, 'Gold')
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block h-full border border-velmora-border bg-velmora-linen text-velmora-ink shadow-none transition duration-500 hover:-translate-y-1 hover:shadow-softGold focus:outline-none focus:ring-2 focus:ring-velmora-gold"
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment">
          <img
            alt={`${product.name} warm gold jewelry product photograph`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={imageId}
            data-strk-img={`[${descId}] [${titleId}] [${tagId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(imageId)}
          />
          <img
            alt={`${product.name} worn styling view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={hoverImageId}
            data-strk-img={`[${tagId}] worn by woman [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(hoverImageId)}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={handleAdd}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-gold px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink shadow-softGold transition hover:bg-velmora-brass"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 text-velmora-ink">
          <p id={tagId} className="text-xs uppercase tracking-luxury text-velmora-clay">
            {product.tag}
          </p>
          <h3 id={titleId} className="font-serifDisplay text-lg uppercase tracking-luxury text-velmora-ink">
            {product.name}
          </h3>
          <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-clay">
            {product.shortDescription}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-velmora-border pt-4">
            <span className="text-sm text-velmora-clay">{product.material}</span>
            <span className="font-semibold text-velmora-ink">${product.price}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
