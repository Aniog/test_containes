import { ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group overflow-hidden border border-velmora-line bg-velmora-ivory text-velmora-espresso transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-blush">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-105"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <img
            alt={`${product.name} styled on model`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 group-hover:scale-105"
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholder}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-night px-4 py-3 text-xs font-bold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-espresso"
            >
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className={compact ? 'p-4' : 'p-5'}>
        <p className="mb-2 flex items-center gap-1 text-xs uppercase tracking-widest text-velmora-bronze">
          <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
          {product.rating.toFixed(1)} · {product.reviews}
        </p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 id={product.titleId} className="font-serif text-base uppercase tracking-[0.22em] text-velmora-espresso transition group-hover:text-velmora-bronze">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 min-h-12 text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-velmora-line pt-4">
          <span className="font-semibold text-velmora-espresso">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-widest text-velmora-taupe">{product.category}</span>
        </div>
      </div>
    </article>
  )
}
