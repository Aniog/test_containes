import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import StarRating from './StarRating.jsx'
import { formatPrice } from '@/lib/format.js'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-velmora-espresso/10 bg-velmora-ivory text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glow">
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-velmora-champagne" aria-label={`View ${product.name}`}>
        <ProductImage
          imageId={product.imageId}
          titleId={product.titleId}
          descId={product.descId}
          alt={product.name}
          ratio="4x3"
          width={priority ? '1000' : '700'}
          src={product.artwork}
          className="aspect-[4/3] h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        <ProductImage
          imageId={product.hoverImageId}
          titleId={product.titleId}
          descId={product.descId}
          alt={`${product.name} worn detail`}
          ratio="4x3"
          width={priority ? '1000' : '700'}
          src={product.artwork}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-95"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-velmora-espresso/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-velmora-ivory backdrop-blur">
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            onAddToCart(product)
          }}
          className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ivory opacity-0 shadow-lg transition duration-300 hover:bg-velmora-gold focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-burnished">{product.category}</p>
            <Link to={`/products/${product.id}`}>
              <h3 id={product.titleId} className="font-serif text-xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-espresso transition group-hover:text-velmora-burnished">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="font-serif text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-velmora-taupe">
          {product.description}
        </p>
        <StarRating rating={product.rating} reviews={product.reviews} compact />
      </div>
    </article>
  )
}
