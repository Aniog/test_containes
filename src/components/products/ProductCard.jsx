import { Link } from 'react-router-dom'
import { imagePlaceholder } from '../../data/products.js'
import { useCart } from '../cart/CartContext.jsx'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`

  return (
    <article className="group relative text-velmora-ink">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-velmora-linen bg-velmora-linen shadow-soft">
        <Link to={`/products/${product.id}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-champagne">
          <img
            alt={`${product.name} worn in warm editorial light`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`velmora-card-primary-${product.id}`}
            data-strk-img={`[${descId}] [${titleId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={imagePlaceholder}
          />
          <img
            alt={`${product.name} close detail`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            data-strk-img-id={`velmora-card-hover-${product.id}`}
            data-strk-img={`[${titleId}] [${descId}] [${categoryId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            src={imagePlaceholder}
          />
        </Link>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="w-full rounded-full bg-velmora-pearl/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-glow backdrop-blur transition hover:bg-velmora-champagne"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="pt-5">
        <p id={categoryId} className="text-xs uppercase tracking-[0.28em] text-velmora-bronze">
          {product.category}
        </p>
        <Link to={`/products/${product.id}`}>
          <h3 id={titleId} className="mt-2 font-serif text-xl uppercase leading-6 tracking-[0.18em] text-velmora-ink md:text-2xl">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 min-h-12 text-sm leading-6 text-velmora-mist">
          {product.description}
        </p>
        <p className="mt-3 font-serif text-2xl text-velmora-bronze">${product.price}</p>
      </div>
    </article>
  )
}
