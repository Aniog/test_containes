import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const productImages = {
  'ear-cuff-1': 'https://images.unsplash.com/photo-1605100804763-247f67c3557e?w=600&q=80',
  'ear-cuff-2': 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80',
  'ear-cuff-3': 'https://images.unsplash.com/photo-1603975217915-1c296f6445a0?w=600&q=80',
  'necklace-1': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  'necklace-2': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  'necklace-3': 'https://images.unsplash.com/photo-1589894404892-7310b92ea0c2?w=600&q=80',
  'huggies-1': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  'huggies-2': 'https://images.unsplash.com/photo-1623162210383-3c3a9a2c1ed7?w=600&q=80',
  'huggies-3': 'https://images.unsplash.com/photo-1617038220302-7a99c9588e15?w=600&q=80',
  'filigree-1': 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=600&q=80',
  'filigree-2': 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&q=80',
  'filigree-3': 'https://images.unsplash.com/photo-1603975217915-1c296f6445a0?w=600&q=80',
  'set-1': 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80',
  'set-2': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
  'set-3': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
}

export default function ProductCard({ product, priority = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const mainImage = productImages[product.images?.[0]] || ''
  const hoverImage = productImages[product.images?.[1]] || mainImage

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-50 mb-4">
        <img
          src={mainImage}
          alt={product.name}
          loading={priority ? 'eager' : 'lazy'}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        <img
          src={hoverImage}
          alt={`${product.name} alternate view`}
          loading="lazy"
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-3 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-velmora-900 py-3 px-4 flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-medium hover:bg-white transition-all shadow-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-product text-velmora-800 tracking-wider">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-velmora-600">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}

export { productImages }