import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden bg-velmora-cacao">
        <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
          <div className="velmora-image-sheen relative aspect-[4/5] overflow-hidden">
            <img
              alt={`${product.name} on warm editorial jewelry set`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '650'}
              loading={priority ? 'eager' : 'lazy'}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} styled on model`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={product.altImgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '900' : '650'}
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-porcelain/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso opacity-0 shadow-soft backdrop-blur transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={15} />
          Add to Cart
        </button>
      </div>
      <div className="pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-bronze">
          {product.category}
        </p>
        <h3 id={product.titleId} className="mt-2 font-serif text-lg uppercase tracking-[0.16em] text-velmora-espresso">
          <Link to={`/product/${product.id}`} className="transition hover:text-velmora-bronze">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-cacao/75">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-sand/70 pt-4">
          <span className="font-semibold text-velmora-espresso">${product.price}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-velmora-cacao/65">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}
