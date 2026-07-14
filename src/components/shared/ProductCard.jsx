import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { StockImage } from '@/components/shared/StockImage'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={cn('group flex flex-col', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <StockImage
          query={product.imageQuery}
          ratio="3x4"
          width={600}
          imgId={`product-card-${product.id}`}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.hoverQuery && (
          <div
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          >
            <StockImage
              query={product.hoverQuery}
              ratio="3x4"
              width={600}
              imgId={`product-card-hover-${product.id}`}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 flex justify-center p-4 transition-all duration-300',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <Button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 'gold', 1)
            }}
            className="btn-primary shadow-soft w-full"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3 className="product-name text-sm text-espresso-900 hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-warmgray-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
