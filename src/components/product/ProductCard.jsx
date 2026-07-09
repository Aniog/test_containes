import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { placeholderSvg } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group relative text-velmora-espresso">
      <div className={`relative overflow-hidden bg-velmora-champagne ${compact ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
        <Link to={`/product/${product.slug}`} className="block h-full overflow-hidden">
          <img
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} worn close-up`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
        </Link>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 translate-y-2 bg-velmora-ivory/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso opacity-0 shadow-soft backdrop-blur transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
      <div className="pt-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-velmora-taupe">{product.category}</p>
          <div className="flex items-center gap-1 text-velmora-gold">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-semibold text-velmora-espresso">{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-xl uppercase tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">{product.description}</p>
        <p className="mt-3 text-sm font-bold text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
