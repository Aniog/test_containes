import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-light/30">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-warm-gray">
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-2">Add something beautiful.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-ivory flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-gray mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-2">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-gray-light text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-warm-gray-light text-charcoal hover:border-gold transition-colors"
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
          <div className="border-t border-gold-light/30 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-warm-gray uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-warm-black text-[11px] tracking-[0.15em] uppercase font-semibold py-4 hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
