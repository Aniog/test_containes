import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext.jsx'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const { addItem } = useCart()

  const fields = product.data || product
  const name = fields.name
  const price = fields.price
  const slug = fields.slug

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addItem({
      id: product.id,
      name: name,
      price: price,
      image: fields.image_url,
      variant: (fields.variants || [])[0] || 'gold',
      quantity: 1,
    })
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/products/${slug}`)}
    >
      <div className="relative overflow-hidden bg-velmora-sand aspect-[3/4]">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-name-${product.id}] gold jewelry on neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.333'/%3E"
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {fields.is_bestseller && (
          <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-sans">
            Bestseller
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velmora-charcoal py-3 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="pt-4 pb-2">
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal"
        >
          {name}
        </h3>
        <p className="font-sans text-sm text-velmora-muted mt-1.5">
          ${price}
        </p>
      </div>
    </div>
  )
}