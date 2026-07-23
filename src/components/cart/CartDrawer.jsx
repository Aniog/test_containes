import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

// Map product IDs to their image URLs for cart display
const productImages = {
  'vivid-aura-cuff': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1611591437281-460bfbe1220a',
  'majestic-flora': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1599643478518-a784e5dc4c8f',
  'golden-sphere-huggies': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1658402954365-112cc5ad47a9',
  'amber-lace': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1535632066927-ab7c9ab60908',
  'royal-heirloom-set': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1602173574767-37ac01994b2a',
  'celestial-drop': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1630019852942-f89202989a59',
  'luna-chain': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1600533894162-88188f3c85e1',
  'twisted-hoops': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1680537920464-695c080bc076',
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeCart])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeCart()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 transform transition-transform duration-300 ease-in-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
          <h2 className="font-serif text-2xl tracking-wider uppercase">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-cream-200 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
              <p className="text-charcoal-500 mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-gold-500 text-white font-medium tracking-wide hover:bg-gold-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant.id}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-cream-100 flex-shrink-0">
                    <img
                      src={productImages[item.product.id] || productImages['vivid-aura-cuff']}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-base tracking-wider uppercase text-charcoal-800">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-charcoal-400 mt-1">
                          {item.variant.name}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant.id)}
                        className="p-1 hover:bg-cream-200 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4 text-charcoal-400" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-cream-300">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                          className="p-2 hover:bg-cream-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                          className="p-2 hover:bg-cream-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-medium text-charcoal-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-charcoal-500">Subtotal</span>
              <span className="font-serif text-xl tracking-wider">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-sm text-charcoal-400">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-4 bg-charcoal-800 text-white font-medium tracking-wide hover:bg-charcoal-700 transition-colors">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-sm text-gold-500 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
