import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import {  } from '@/data/products'
import Button from '@/components/ui/Button'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  const imageQuery = `[${product.descId}] [${product.titleId}]`

  return (
    <article className="group flex h-full flex-col bg-velmora-mist text-velmora-ink shadow-soft">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-velmora-parchment">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={product.imgId}
          data-strk-img={imageQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <img
          alt={`${product.name} worn styling`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            className="w-full bg-velmora-cream/95 py-3 text-velmora-ink backdrop-blur hover:bg-velmora-champagne"
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 border border-t-0 border-velmora-ink/10 p-5">
        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-velmora-brass">
          <span>{product.category}</span>
          {!compact && (
            <span className="flex items-center gap-1 text-velmora-ink">
              <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
              {product.rating}
            </span>
          )}
        </div>
        <Link to={`/product/${product.id}`} className="focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
          <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase tracking-luxe text-velmora-ink md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-ink/70">
          {product.description}
        </p>
        <p className="mt-auto text-base font-bold text-velmora-ink">${product.price}</p>
      </div>
    </article>
  )
}
