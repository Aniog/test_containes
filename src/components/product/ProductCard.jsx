import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative text-[#17110D]">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#E9D8BE]/50 shadow-[0_18px_50px_rgba(23,17,13,0.08)]">
        <Link to={`/product/${product.slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9853B]">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="760"
            src={placeholder}
          />
          <img
            alt={`${product.name} worn close-up`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="760"
            src={placeholder}
          />
        </Link>
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center justify-center gap-2 bg-[#17110D] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FBF8F2] transition hover:bg-[#5D3A1E]"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className={compact ? 'pt-4' : 'pt-5'}>
        <div className="mb-2 flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.16em] text-[#8D7463]">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-[#5D3A1E]">
            <Star className="h-3.5 w-3.5 fill-[#B9853B] text-[#B9853B]" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <Link to={`/product/${product.slug}`} className="block">
          <h3 id={product.titleId} className="font-serif text-base uppercase leading-snug tracking-[0.22em] text-[#17110D] transition group-hover:text-[#5D3A1E] md:text-lg">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-[#8D7463]">
          {product.description}
        </p>
        <p className="mt-3 font-sans text-sm font-semibold tracking-[0.08em] text-[#17110D]">
          ${product.price}
        </p>
      </div>
    </article>
  )
}
