import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { formatPrice } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const primaryImage = product.gallery[0]
  const secondaryImage = product.gallery[1] || primaryImage

  return (
    <article
      className="group rounded-[1.75rem] border border-brand-line bg-white p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="block space-y-4">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-sand">
          <div className="aspect-[3/4]">
            <ImageSlot
              slotId={isHovered ? secondaryImage.slotId : primaryImage.slotId}
              query={`[product-${product.id}-desc] [product-${product.id}-title]`}
              ratio="3x4"
              width="600"
              alt={product.name}
              className="transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-overline text-brand-ink">
            {product.badge}
          </span>
        </div>

        <div className="space-y-3 px-1">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-overline text-brand-cocoa">
              {product.category}
            </p>
            <h3
              id={`product-${product.id}-title`}
              className="text-sm uppercase tracking-product text-brand-ink"
            >
              {product.name}
            </h3>
            <p
              id={`product-${product.id}-desc`}
              className="text-sm leading-6 text-brand-cocoa"
            >
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-base font-semibold text-brand-ink">
              {formatPrice(product.price)}
            </p>
            <span className="text-xs uppercase tracking-overline text-brand-cocoa">
              {product.material}
            </span>
          </div>
        </div>
      </Link>

      <Button
        className="mt-5 w-full justify-center"
        onClick={() => addItem(product, product.tones[0], 1)}
      >
        Add to Cart
      </Button>
    </article>
  )
}
