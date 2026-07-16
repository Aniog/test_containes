import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { toast } from 'sonner'

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product, 'Gold', 1)
    toast.success(`Added ${product.name} to cart`, {
      description: `$${product.price}`,
      duration: 2000,
    })
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image primary absolute inset-0"
        />
        {product.hoverImage && (
          <img 
            src={product.hoverImage} 
            alt={product.name}
            className="product-image secondary absolute inset-0 opacity-0"
          />
        )}
        
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-gold text-xs px-8 py-3"
          >
            Quick Add
          </button>
        )}
      </div>
      
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B655F]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard