import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-[slideIn_0.3s_ease-out]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm">
            <h2 className="font-serif text-xl tracking-wide">
              Your Bag {itemCount > 0 && <span className="text-stone font-sans text-sm ml-1">({itemCount})</span>}
            </h2>
            <button onClick={closeCart} className="p-1 text-charcoal/50 hover:text-charcoal transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-stone px-6">
              <ShoppingBag className="w-12 h-12 text-stone/30" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <Link to="/shop" onClick={closeCart} className="text-xs tracking-widest uppercase text-gold-dark hover:text-bronze transition-colors underline underline-offset-4">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-warm/50 last:border-0">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-sand flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gold/40" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3
                            id={`cart-title-${item.id}`}
                            className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal leading-tight"
                          >
                            {item.name}
                          </h3>
                          <p className="text-xs text-stone mt-0.5">{item.variant === 'silver' ? 'Silver Tone' : 'Gold Tone'}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-stone/40 hover:text-charcoal transition-colors flex-shrink-0"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-charcoal/50 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-charcoal/50 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-charcoal">${(item.price * item.quantity).toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-warm px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone">Subtotal</span>
                  <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(0)}</span>
                </div>
                <p className="text-xs text-stone/70">Shipping & taxes calculated at checkout</p>
                <button className="w-full py-3 bg-charcoal text-cream text-xs font-medium tracking-[0.2em] uppercase hover:bg-espresso transition-colors rounded-sm">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
