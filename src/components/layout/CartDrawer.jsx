import { useEffect, useRef } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
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
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slide-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <h2 className="font-serif text-lg tracking-[0.1em] uppercase">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-warm-gray hover:text-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-warm-gray text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs tracking-[0.15em] uppercase font-medium text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-ivory rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[cart-item-name-${item.key}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`cart-item-name-${item.key}`} className="font-serif text-sm tracking-[0.1em] uppercase truncate">{item.name}</h3>
                    <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-border text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-border text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-gray hover:text-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-warm-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white text-xs tracking-[0.15em] uppercase font-medium py-3.5 hover:bg-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
