import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warm-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
            <h2 className="font-serif text-xl tracking-widest text-espresso">
              YOUR BAG ({itemCount})
            </h2>
            <button onClick={onClose} className="p-1 hover:text-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-espresso/50">
                <ShoppingBag size={40} strokeWidth={1} />
                <p className="mt-4 font-sans text-sm">Your bag is empty</p>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-taupe/60">
                    <div className="w-20 h-24 bg-muted-gold rounded-sm flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images?.primary}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="product-name text-xs">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-espresso/30 hover:text-espresso transition-colors ml-2"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-espresso/50 mt-1">18K Gold Plated</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-taupe rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 py-0.5 text-xs font-sans min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-sans text-espresso">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="px-6 py-5 border-t border-taupe space-y-4">
              <div className="flex justify-between text-sm font-sans">
                <span className="text-espresso/60">Subtotal</span>
                <span className="text-espresso font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-espresso/40 font-sans">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="block w-full text-center text-xs uppercase tracking-widest text-espresso/50 hover:text-espresso transition-colors py-2 font-sans"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
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