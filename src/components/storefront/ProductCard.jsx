import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group relative border border-taupe/70 bg-porcelain text-espresso transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(36,25,20,0.12)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-rose-beige">
          <ProductImage
            imageId={product.imgId}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            imageId={product.hoverImgId}
            alt={`${product.name} worn styling`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition hover:bg-umber focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-porcelain"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="space-y-2 p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sable">
            {product.category}
          </p>
          <h3 id={product.titleId} className="font-serif text-lg uppercase leading-tight tracking-[0.16em] text-espresso">
            {product.name}
          </h3>
          <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-sable">
            {product.description}
          </p>
          <p className="pt-1 text-sm font-semibold tracking-[0.16em] text-espresso">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}
