import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export default function ProductCard({ product, onAdd, compact = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-velmora-champagne/20 bg-velmora-linen text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glow">
      <Link to={`/products/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-velmora-cream" aria-label={`View ${product.name}`}>
        <img
          alt={product.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
        />
        <img
          alt={`${product.name} worn detail`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholder}
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAdd(product)
            }}
            className="w-full bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-cacao"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-widest text-velmora-bronze">
          <span>{product.category}</span>
          {!compact && (
            <span className="flex items-center gap-1 text-velmora-cacao">
              <Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" />
              {product.rating.toFixed(1)}
            </span>
          )}
        </div>
        <Link to={`/products/${product.id}`} className="focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
          <h3 id={product.titleId} className="font-serif text-xl uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 flex-1 text-sm leading-6 text-velmora-cacao">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-champagne/20 pt-4">
          <span className="font-serif text-2xl text-velmora-espresso">${product.price}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="text-xs font-semibold uppercase tracking-widest text-velmora-bronze transition hover:text-velmora-espresso"
          >
            Quick Add
          </button>
        </div>
      </div>
    </article>
  )
}
