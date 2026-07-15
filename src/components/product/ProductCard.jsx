import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import ProductImage from './ProductImage'
import Rating from './Rating'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const materialId = `product-${product.id}-material`

  return (
    <article className="group relative flex h-full flex-col border border-velmora-linen/80 bg-velmora-porcelain text-velmora-espresso shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen/40">
        <Link to={`/products/${product.slug}`} className="block h-full" aria-label={`View ${product.name}`}>
          <ProductImage
            product={product}
            variant="card-primary"
            ratio="3x4"
            width="700"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            variant="card-hover"
            ratio="3x4"
            width="700"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <div className="absolute left-3 top-3 rounded-full border border-velmora-linen/80 bg-velmora-porcelain/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-velmora-antique backdrop-blur">
          {product.badge}
        </div>
        <button
          type="button"
          className="absolute inset-x-4 bottom-4 hidden translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-champagne px-5 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-velmora-espresso opacity-0 shadow-glow transition duration-300 hover:bg-velmora-porcelain group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-3.5 w-3.5" /> Quick Add
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <Link to={`/products/${product.slug}`} className="group/title">
              <h3
                id={titleId}
                className="font-serif text-lg font-semibold uppercase leading-tight tracking-[0.2em] text-velmora-espresso transition group-hover/title:text-velmora-antique"
              >
                {product.name}
              </h3>
            </Link>
            <p className="shrink-0 text-sm font-bold text-velmora-espresso">
              {formatPrice(product.price)}
            </p>
          </div>
          <p id={materialId} className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-sage">
            {product.material}
          </p>
          {!compact && (
            <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-ink/80">
              {product.shortDescription}
            </p>
          )}
          {compact && <span id={descId} className="sr-only">{product.shortDescription}</span>}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <Rating rating={product.rating} reviews={product.reviews} compact />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-velmora-espresso px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-porcelain transition duration-300 hover:bg-velmora-antique focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-velmora-champagne"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </article>
  )
}
