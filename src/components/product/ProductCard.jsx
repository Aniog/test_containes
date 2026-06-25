import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'
import { StarRating } from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-cream">
        {/* primary image */}
        <StrkImage
          imgId={primary.imgId}
          query={`[${primary.descId}] [${primary.titleId}]`}
          ratio={primary.ratio}
          width={primary.width}
          alt={product.name}
          titleId={primary.titleId}
          descId={primary.descId}
          className="block w-full aspect-[4/5] object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* secondary image (revealed on hover) */}
        <StrkImage
          imgId={secondary.imgId}
          query={`[${secondary.descId}] [${secondary.titleId}]`}
          ratio={secondary.ratio}
          width={secondary.width}
          alt={product.name}
          titleId={secondary.titleId}
          descId={secondary.descId}
          className="absolute inset-0 w-full aspect-[4/5] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/95 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">{product.type}</p>
        <h3
          id={product.titleId}
          className="mt-1 font-serif text-lg uppercase tracking-[0.12em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm tracking-wide text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}

export default ProductCard
