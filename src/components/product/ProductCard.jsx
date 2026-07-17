import { Link } from 'react-router-dom'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, className }) {
  const ref = useStrkImages([])
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants?.[0] })
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      ref={ref}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={STRK_PLACEHOLDER}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Secondary hover image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={STRK_PLACEHOLDER}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-ink/90 py-3 text-[11px] uppercase tracking-widest2 text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-sans text-[11px] uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
