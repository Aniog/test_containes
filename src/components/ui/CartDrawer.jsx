import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-warm-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-warm-charcoal border-l border-warm-dark/50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-dark/50">
          <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-warm-cream">
            Your Bag ({items.length})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-1 text-warm-tan hover:text-warm-cream transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warm-dark mb-4" />
              <p className="font-serif text-lg text-warm-tan">Your bag is empty</p>
              <p className="text-sm text-warm-tan/60 mt-2">Discover our collections and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-warm-dark/50 rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.tone}`}
                      data-strk-img={`[cart-item-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-item-${item.id}`} className="hidden">{item.name} jewelry gold</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-warm-cream truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-tan mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm text-warm-gold mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-dark text-warm-tan hover:text-warm-cream hover:border-warm-tan transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-warm-cream w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-dark text-warm-tan hover:text-warm-cream hover:border-warm-tan transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-[11px] uppercase tracking-wider text-warm-tan hover:text-warm-gold transition-colors"
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
          <div className="border-t border-warm-dark/50 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-[0.15em] text-warm-tan">Subtotal</span>
              <span className="font-serif text-lg text-warm-cream">{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-warm-tan/60 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-warm-gold text-warm-black py-3 text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-warm-gold-light transition-colors duration-300">
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
    </>
  )
}
