import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative overflow-hidden bg-velmora-ivory text-velmora-ink shadow-velmoraSoft transition duration-500 hover:-translate-y-1 hover:shadow-velmoraLift">
      <Link to={`/products/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className={compact ? 'relative aspect-[4/5] overflow-hidden' : 'relative aspect-[3/4] overflow-hidden'}>
          <ProductImage {...product} alt={product.name} className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <ProductImage
            imageId={product.hoverImageId}
            titleId={product.titleId}
            descId={product.descId}
            alt={`${product.name} styled`}
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="w-full bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-2 border-t border-velmora-espresso/10 p-5">
        <p id={product.titleId} className="font-serifDisplay text-lg font-semibold uppercase leading-tight tracking-[0.22em] text-velmora-espresso">
          {product.name}
        </p>
        <p id={product.descId} className="text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2 text-sm text-velmora-espresso">
          <span className="uppercase tracking-[0.18em] text-velmora-taupe">{product.category}</span>
          <span className="font-semibold">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
