import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductImage } from '@/components/ui/ProductImage'
import { StarRating } from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, queryContext = '' }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`
  const query = `[${descId}] [${titleId}] ${queryContext}`

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-taupe/20">
          <ProductImage
            id={descId}
            imgId={`product-thumb-${product.id}`}
            query={query}
            ratio="3x4"
            width="600"
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <ProductImage
            imgId={`product-hover-${product.id}`}
            query={query}
            ratio="3x4"
            width="600"
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
              hovered ? 'opacity-100' : 'opacity-0',
            )}
          />
          <button
            className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-velmora-charcoal opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 hover:text-velmora-gold"
            aria-label="Add to wishlist"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <div className="mb-2 flex justify-center">
          <StarRating rating={product.rating} size={12} />
        </div>
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal"
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-velmora-stone">${product.price}</p>
      </div>

      <div className="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button
          className="w-full"
          onClick={(e) => {
            e.preventDefault()
            addItem(product, product.variants[0], 1)
          }}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Bag
        </Button>
      </div>
    </div>
  )
}
