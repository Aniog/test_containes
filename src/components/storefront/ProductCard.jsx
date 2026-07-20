import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const placeholder = '/velmora-placeholder.svg'

function ProductCard({ product, onAddToCart, compact = false }) {
  const imageQuery = `[${product.descId}] [${product.titleId}]`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-mist bg-pearl text-espresso transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-blush" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
            data-strk-img-id={product.imgId}
            data-strk-img={imageQuery}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <img
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={imageQuery}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product)
            }}
            className="absolute bottom-4 left-4 right-4 translate-y-3 border border-espresso/15 bg-pearl/95 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-espresso opacity-0 shadow-soft backdrop-blur transition duration-300 hover:bg-espresso hover:text-porcelain group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-champagne-dark">{product.category}</p>
        <Link to={`/product/${product.id}`} className="text-espresso transition hover:text-champagne-dark">
          <h3 id={product.titleId} className="font-serif text-lg uppercase leading-snug tracking-product sm:text-xl">
            {product.name}
          </h3>
        </Link>
        {!compact && (
          <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-mocha">
            {product.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-sans text-sm font-semibold text-espresso">${product.price}</span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mist bg-porcelain text-espresso transition hover:border-champagne hover:bg-champagne hover:text-pearl"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
