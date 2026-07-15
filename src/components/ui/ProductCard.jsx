import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from './Button'

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, selectedVariant)
  }

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#E5E0D8] aspect-[4/3] mb-4">
        <img 
          src={isHovered && product.images?.[1] ? product.images[1] : product.images?.[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 mb-3">
              {product.variants?.map(v => (
                <button
                  key={v}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setSelectedVariant(v)
                  }}
                  className={`text-[10px] px-3 py-1 rounded-full border transition-all tracking-[1px] ${
                    selectedVariant === v 
                      ? 'bg-white text-[#1A1816] border-white' 
                      : 'bg-transparent text-white border-white/50 hover:border-white'
                  }`}
                >
                  {v.toUpperCase()}
                </button>
              ))}
            </div>
            <Button 
              onClick={handleAddToCart}
              size="sm"
              className="w-full text-xs"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-2" />
              ADD TO CART
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#1A1816] group-hover:text-[#A67C52] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#8B8178]">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm text-[#4A4640]">{formatPrice(product.price)}</span>
          <span className="text-xs text-[#8B8178]">{product.category}</span>
        </div>
      </div>
    </Link>
  )
}
