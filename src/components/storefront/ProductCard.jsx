import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group overflow-hidden rounded-sm border border-velmora-mist bg-velmora-parchment text-velmora-ink shadow-jewel transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className={`${compact ? 'aspect-editorial' : 'aspect-portrait'} relative overflow-hidden bg-velmora-linen`}>
          <ProductImage
            alt={`${product.name} demi-fine jewelry`}
            imageId={product.imageId}
            query={`[${product.descId}] [${product.nameId}]`}
            ratio={compact ? '4x3' : '3x4'}
            width="700"
            className="transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            alt={`${product.name} worn detail`}
            imageId={product.hoverImageId}
            query={`[${product.nameId}] [${product.descId}]`}
            ratio={compact ? '4x3' : '3x4'}
            width="700"
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-ink px-4 py-3 font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-cream transition-colors hover:bg-velmora-gold hover:text-velmora-ink"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <p className="font-sans text-micro uppercase tracking-jewel text-velmora-bronze">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.nameId} className="mt-3 font-serif text-xl uppercase tracking-jewel text-velmora-ink transition-colors hover:text-velmora-bronze">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-velmora-espresso">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-mist pt-4">
          <span className="font-sans text-sm text-velmora-bronze">${product.price}</span>
          <span className="font-sans text-xs uppercase tracking-luxe text-velmora-espresso">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}
