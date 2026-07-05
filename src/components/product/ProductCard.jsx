import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0].value,
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Button size="sm" onClick={handleAddToCart} className="shadow-lg">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-text">
            Bestseller
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="product-name text-sm">{product.name}</h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  )
}