import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group relative bg-velmora-porcelain text-velmora-ink">
      <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne">
          <div
            aria-label={product.name}
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            role="img"
            data-strk-bg-id={product.imgId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
          />
          <div
            aria-label={`${product.name} worn`}
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            role="img"
            data-strk-bg-id={product.hoverImgId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="700"
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute inset-x-4 bottom-4 translate-y-3 bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-bronze group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="border-x border-b border-velmora-line px-4 py-5 sm:px-5">
        <Link to={`/products/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-lg uppercase tracking-luxe text-velmora-ink transition group-hover:text-velmora-bronze">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-velmora-taupe">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-velmora-ink">
          <span className="font-semibold">${product.price}</span>
          <span className="text-xs uppercase tracking-luxe text-velmora-taupe">{product.category}</span>
        </div>
      </div>
    </article>
  )
}
