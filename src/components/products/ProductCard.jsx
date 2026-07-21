import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, setCartOpen } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setCartOpen(true)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#F5F5F4] rounded-lg overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={isHovered ? product.images.secondary : product.images.primary}
          alt={product.name}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={cn(
              'absolute bottom-4 left-4 right-4 transition-all duration-300',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            <Button
              onClick={handleQuickAdd}
              className="w-full rounded-full bg-white/95 text-[#1C1917] hover:bg-white shadow-lg backdrop-blur-sm"
              size="sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Bag
            </Button>
          </div>
        )}

        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#C9A96E] text-white text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm text-[#1C1917] group-hover:text-[#C9A96E] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#78716C] capitalize">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#1C1917]">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
            <span className="text-xs text-[#78716C]">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
