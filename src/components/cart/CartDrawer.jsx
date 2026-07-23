import React from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-warm-black/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-warm-cream z-50 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-warm-sand">
          <h2 className="font-serif text-xl tracking-wider uppercase text-warm-black">Your Cart</h2>
          <button onClick={closeCart} className="p-1 text-warm-black hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-warm-black/60">
              <ShoppingBag className="w-12 h-12 mb-4 stroke-1" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="text-sm mt-2">Discover something beautiful to add.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-warm-ivory rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-widest text-warm-black/40 text-center leading-tight px-1">{item.product.name.split(' ').slice(0, 2).join('\n')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-warm-black truncate">{item.product.name}</h3>
                    <p className="text-xs text-warm-black/50 mt-1 capitalize">{item.tone} tone</p>
                    <p className="font-sans font-semibold text-sm text-warm-black mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-warm-sand text-warm-black hover:border-gold hover:text-gold transition-colors rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-warm-black w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-warm-sand text-warm-black hover:border-gold hover:text-gold transition-colors rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-black/40 hover:text-warm-black transition-colors underline"
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
          <div className="border-t border-warm-sand p-6 bg-warm-cream">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm uppercase tracking-wider text-warm-black/60">Subtotal</span>
              <span className="font-serif text-lg text-warm-black">${totalPrice}</span>
            </div>
            <p className="text-xs text-warm-black/40 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-warm-black font-sans text-sm uppercase tracking-wider py-3 hover:bg-gold-light transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
