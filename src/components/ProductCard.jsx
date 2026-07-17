import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../App'

const ProductCard = ({ product }) => {
  const [showSecondary, setShowSecondary] = useState(false)
  const { addToCart } = useContext(CartContext)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div 
        className="product-image-container aspect-[4/3.5] mb-4"
        onMouseEnter={() => setShowSecondary(true)}
        onMouseLeave={() => setShowSecondary(false)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image w-full h-full object-cover"
          style={{ opacity: showSecondary ? 0 : 1 }}
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image-secondary w-full h-full object-cover"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs py-2.5 px-6"
        >
          Quick Add
        </button>
      </div>
      
      <div className="px-1">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-4">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B665F]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard