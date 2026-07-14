import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, count } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/60 cart-overlay transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-parchment flex flex-col transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-ink" />
            <h2 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink">
              Your Cart {count > 0 && <span className="text-gold">({count})</span>}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-ink transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-ink-muted font-light">Your cart is empty</p>
              <p className="font-sans text-sm text-ink-muted">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase font-semibold text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-linen flex items-center justify-center">
                      <span className="font-serif text-xs text-ink-muted italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-ink-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-ink-muted hover:text-ink transition-colors duration-300 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-cream transition-all duration-200"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-cream transition-all duration-200"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen bg-parchment">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-ink-muted mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold-light transition-all duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-linen text-ink font-sans text-xs tracking-widest uppercase font-medium py-3 hover:border-ink transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
