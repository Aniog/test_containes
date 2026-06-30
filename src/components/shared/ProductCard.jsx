import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import ProductImage from '@/components/ui/ProductImage'
import StarRating from '@/components/ui/StarRating'
import { formatPrice } from '@/lib/format'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const fields = product
  const titleId = `product-title-${fields.id}`
  const imgId = `product-img-${fields.id}`

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ ...fields, image_query: fields.image_query }, 'Gold', 1)
  }

  return (
    <Link
      to={`/products/${fields.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-velmora-taupe/10">
        <ProductImage
          id={titleId}
          imgId={imgId}
          alt={fields.name}
          ratio="4x5"
          width={600}
          className="transition-transform duration-700 group-hover:scale-105"
        />

        {fields.compare_price && (
          <span className="absolute left-3 top-3 bg-velmora-gold px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-velmora-base">
            Sale
          </span>
        )}

        <div
          className={`absolute inset-x-0 bottom-0 flex justify-center p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex w-full items-center justify-center gap-2 bg-velmora-ivory py-3 text-xs font-semibold uppercase tracking-widest text-velmora-base shadow-lg transition-colors hover:bg-velmora-gold hover:text-velmora-base"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-1 text-center">
        <StarRating rating={fields.rating} size={12} />
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-[0.15em] transition-colors group-hover:text-velmora-gold"
        >
          {fields.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-medium">{formatPrice(fields.price)}</span>
          {fields.compare_price && (
            <span className="text-xs text-velmora-taupe-light line-through">
              {formatPrice(fields.compare_price)}
            </span>
          )}
        </div>
        <p className="text-xs text-velmora-taupe-light capitalize">
          {fields.category}
        </p>
      </div>
    </Link>
  )
}
