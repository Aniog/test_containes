import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Star, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem, toggleCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, "gold")
    toggleCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white/95 py-3 text-xs uppercase tracking-[0.15em] text-stone-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm tracking-wide uppercase">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
          <span className="text-xs text-stone-600">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
