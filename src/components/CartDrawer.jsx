import { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-velmora-bg shadow-velmora-elevated flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-text-secondary hover:text-velmora-text transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-text-light mb-4" />
              <p className="font-serif text-lg text-velmora-text-secondary mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-text-light mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/collection"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-border last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-surface-hover flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-gold text-xs font-serif">VELMORA</span>
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 text-velmora-text">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-text-light mb-2">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velmora-text">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-velmora-text-light hover:text-velmora-error transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                    <div className="flex items-center gap-2 border border-velmora-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 text-velmora-text-secondary hover:text-velmora-text transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center text-velmora-text">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 text-velmora-text-secondary hover:text-velmora-text transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with total and checkout */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-velmora-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-velmora-text-secondary">Subtotal</span>
              <span className="font-medium text-velmora-text">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velmora-text-light mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary justify-center">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-center text-sm text-velmora-text-secondary hover:text-velmora-text transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
