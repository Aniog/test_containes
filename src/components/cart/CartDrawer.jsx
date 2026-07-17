import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-base/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-white shadow-2xl flex flex-col animate-[slideInRight_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-wider">
            SHOPPING BAG ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-1.5 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-muted px-6">
            <ShoppingBag size={40} strokeWidth={1} />
            <p className="font-sans text-sm">Your bag is empty</p>
            <button
              onClick={closeCart}
              className="btn-outline mt-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-velmora-border/50">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand rounded-sm overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-velmora-taupe/40">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-velmora-text">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-velmora-muted mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-0.5 text-velmora-muted hover:text-velmora-gold transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-velmora-text">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex justify-between font-sans text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-semibold text-velmora-text">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-accent w-full"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-velmora-muted hover:text-velmora-text transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
