import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { Button } from './Button'

export function CartDrawer() {
  const {
    cart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    isLoading,
  } = useCart()

  const drawerRef = useRef(null)

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false)
      }
    }
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isCartOpen, setIsCartOpen])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false)
    }
  }

  if (!isCartOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-900/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warmgray-200">
          <h2 className="font-serif text-xl">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-warmgray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warmgray-300 mb-4" />
              <p className="text-warmgray-500 mb-4">Your bag is empty</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li
                  key={`${item.productId}-${item.variant}`}
                  className="flex gap-4"
                >
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="block"
                    >
                      <h3 className="product-name text-xs mb-1">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-warmgray-500 mb-2">
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-warmgray-200">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="p-1.5 hover:bg-warmgray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="p-1.5 hover:bg-warmgray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.variant)}
                    className="self-start p-1 hover:text-gold-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-warmgray-200 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-warmgray-600">Subtotal</span>
              <span className="font-serif text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-warmgray-500 text-center">
              Shipping and taxes calculated at checkout
            </p>
            <Button
              variant="primary"
              size="full"
              disabled={isLoading}
              loading={isLoading}
            >
              Checkout
            </Button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-warmgray-500 hover:text-charcoal-900 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
