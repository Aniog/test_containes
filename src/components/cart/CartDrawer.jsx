import React from 'react'
import { X, Plus, Minus, Gem } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-gold transition-colors p-1" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-warm-gray">Discover our collection and add something beautiful.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-linen flex-shrink-0 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-gold/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal min-w-[1.25rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-sand flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-gray hover:text-charcoal transition-colors underline"
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
          <div className="border-t border-sand px-6 py-5">
            <div className="flex justify-between mb-4">
              <span className="font-sans text-sm text-warm-gray">Subtotal</span>
              <span className="font-sans text-sm font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-dark text-white font-sans text-sm tracking-wide-custom uppercase py-3.5 transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
