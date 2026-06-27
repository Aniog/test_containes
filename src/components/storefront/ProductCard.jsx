import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, priority = false }) {
  return (
    <article className="group relative border border-[#D8C7B2]/70 bg-[#FFFDF8] text-[#241914] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(36,25,20,0.12)]">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE3D5]">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholder}
          />
          <img
            alt={`${product.name} worn styling`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.titleId}] warm gold jewelry worn on model editorial close up`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholder}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#241914] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F8F1E8] transition hover:bg-[#3A2A22] focus:outline-none focus:ring-2 focus:ring-[#C9A15F] focus:ring-offset-2 focus:ring-offset-[#FFFDF8]"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="space-y-2 p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#7A6252]">
            {product.category}
          </p>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase leading-tight tracking-[0.16em] text-[#241914]"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-[#5F4A3D]">
            {product.description}
          </p>
          <p className="pt-1 text-sm font-semibold tracking-[0.16em] text-[#241914]">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}
