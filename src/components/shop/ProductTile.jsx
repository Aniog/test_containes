import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductTile = ({ product, onAdd }) => {
  const productPath = `/product/${product.slug}`

  return (
    <article className="group text-velmora-ink">
      <div className="relative aspect-[4/5] overflow-hidden border border-velmora-ink/10 bg-velmora-parchment shadow-sm transition duration-500 group-hover:shadow-velvet">
        <Link to={productPath} className="block h-full">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
          />
          <img
            alt={`${product.name} worn`}
            data-strk-img-id={product.imgHoverId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded-full bg-velmora-cream/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-velmora-ink">
            {product.category}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute inset-x-4 bottom-4 border border-velmora-champagne bg-velmora-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream opacity-100 shadow-glow transition duration-300 hover:bg-velmora-espresso md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-b border-velmora-ink/10 pb-5">
        <div>
          <Link to={productPath}>
            <h3 id={product.titleId} className="font-serif text-base font-semibold uppercase tracking-[0.22em] text-velmora-ink md:text-lg">
              {product.name}
            </h3>
          </Link>
          <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-espresso/75">
            {product.description}
          </p>
        </div>
        <p className="whitespace-nowrap font-serif text-xl font-semibold text-velmora-ink">${product.price}</p>
      </div>
    </article>
  )
}

export default ProductTile
