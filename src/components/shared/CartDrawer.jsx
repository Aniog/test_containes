import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from './CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand/50">
          <h2 className="font-serif text-xl tracking-wide text-brand-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-brand-muted hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-brand-warm-gray">
              <p className="font-serif text-lg mb-2">Your bag is empty</p>
              <p className="text-sm">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 bg-brand-sand/30">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-brand-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-brand-warm-gray mt-0.5">{item.tone}</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium text-brand-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-warm-gray hover:text-brand-gold-dark transition-colors underline"
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
          <div className="border-t border-brand-sand/50 px-6 py-5">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-brand-warm-gray">Subtotal</span>
              <span className="text-sm font-semibold text-brand-charcoal">${subtotal}</span>
            </div>
            <p className="text-xs text-brand-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout
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
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default CartDrawer
