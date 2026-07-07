import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { StrkImage } from '@/components/product/StrkImage'
import { StarRating } from '@/components/ui/StarRating'

export function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = React.useState(false)
  const mainImage = product.images[0]
  const altImage = product.images[1] || product.images[0]
  const showAlt = hovered && altImage.id !== mainImage.id

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: product.id, variant: product.variants?.[0]?.id || 'gold' })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[3/4]">
        <StrkImage
          id={mainImage.id}
          query={mainImage.queryParts.map((p) => `[${p}]`).join(' ')}
          ratio="3x4"
          width={800}
          alt={mainImage.alt}
          eager={eager}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft',
            showAlt ? 'opacity-0' : 'opacity-100',
          )}
        />
        {altImage.id !== mainImage.id && (
          <StrkImage
            id={altImage.id}
            query={altImage.queryParts.map((p) => `[${p}]`).join(' ')}
            ratio="3x4"
            width={800}
            alt={altImage.alt}
            eager={eager}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft',
              showAlt ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-deep text-[10px] tracking-eyebrow uppercase font-sans px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add — appears on hover */}
        <button
          type="button"
          aria-label={`Quick add ${product.name}`}
          onClick={handleAdd}
          className={cn(
            'absolute left-3 right-3 bottom-3 py-3 bg-cream/95 backdrop-blur-sm text-deep text-[11px] tracking-eyebrow uppercase font-sans flex items-center justify-center gap-2 transition-all duration-300 ease-out-soft',
            'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-deep hover:text-cream',
          )}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Quick add
        </button>
      </div>

      <div className="pt-4 px-1">
        <h3 className="product-name">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-sans text-sm text-deep">
            {formatPrice(product.price)}
          </span>
          <StarRating value={product.rating} count={product.reviewCount} size={11} />
        </div>
      </div>
    </Link>
  )
}
