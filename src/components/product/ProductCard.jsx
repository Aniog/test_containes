import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { formatPrice, placeholderSrc } from '@/data/products'
import { useCart } from '@/cart/CartContext'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-velmora-line/80 bg-velmora-porcelain text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-velmora-champagne/60">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-search-${product.id}] [${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholderSrc}
        />
        <img
          alt={`${product.name} worn detail`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[product-search-${product.id}] [${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="700"
          src={placeholderSrc}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            addToCart(product)
          }}
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-porcelain opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-bronze">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-espresso">
            <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
            {product.rating}
          </span>
        </div>
        <Link to={`/products/${product.slug}`} className="block">
          <h3
            id={product.titleId}
            className="font-serif text-base font-semibold uppercase tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-bronze sm:text-lg"
          >
            {product.name}
          </h3>
        </Link>
        {!compact && (
          <p id={product.descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-mink">
            {product.description}
          </p>
        )}
        {compact && <span id={product.descId} className="sr-only">{product.description}</span>}
        <span id={`product-search-${product.id}`} className="sr-only">{product.query}</span>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-serif text-xl font-semibold text-velmora-espresso">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full border border-velmora-line bg-velmora-ivory p-2.5 text-velmora-espresso transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-espresso"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}
