import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import EditorialImage from './EditorialImage'

export default function ProductCard({ product, scope, onAddToCart }) {
  const titleId = `${scope}-${product.id}-title`
  const descId = `${scope}-${product.id}-desc`

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden bg-velmora-porcelain shadow-sm transition duration-500 group-hover:shadow-velvet">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
          <EditorialImage
            id={`${scope}-${product.imageId}`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="900"
            alt={product.name}
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <EditorialImage
            id={`${scope}-${product.hoverImageId}`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="900"
            alt={`${product.name} styled`}
            className="absolute inset-0 aspect-[4/3] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-velmora-ivory opacity-0 shadow-glow transition duration-300 hover:bg-velmora-cocoa focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          Add to Cart
        </button>
      </div>
      <div className="border-b border-velmora-cocoa/10 py-5">
        <p id={descId} className="mb-2 font-sans text-xs uppercase tracking-[0.18em] text-velmora-taupe">
          {product.category} · {product.material}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3
            id={titleId}
            className="font-serifDisplay text-xl font-semibold uppercase tracking-product text-velmora-espresso transition hover:text-velmora-antique"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 font-sans text-sm font-semibold text-velmora-cocoa">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
