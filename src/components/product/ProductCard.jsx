import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { placeholderSvg } from '@/data/products.js'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()

  return (
    <article className="group text-velmora-ink">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-blush shadow-editorial">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} styled`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
        </Link>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-porcelain px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink opacity-0 shadow-lg transition duration-300 hover:bg-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              id={product.titleId}
              className="font-serif text-xl font-semibold uppercase tracking-[0.18em] text-velmora-ink"
            >
              {product.name}
            </h3>
            <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-taupe">
              {product.description}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-velmora-ink">${product.price}</p>
        </div>
      </div>
    </article>
  )
}
