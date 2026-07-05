import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-pale-gray">
          <h2 className="font-serif text-lg tracking-widest uppercase">Your Bag</h2>
          <button onClick={closeCart} className="p-1 hover:text-brand-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-warm-gray">Your bag is empty</p>
              <p className="text-sm text-brand-light-gray mt-2 font-sans">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 text-xs tracking-super-wide uppercase font-sans font-medium border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-brand-ivory rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-brand-light-gray font-sans uppercase tracking-wider">Photo</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-widest uppercase leading-tight">{item.name}</h3>
                    <p className="text-xs text-brand-warm-gray mt-1 font-sans">{item.variant}</p>
                    <p className="text-sm font-sans font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-brand-pale-gray rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1 hover:text-brand-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-sans w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1 hover:text-brand-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-brand-light-gray hover:text-brand-charcoal transition-colors font-sans underline"
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
          <div className="border-t border-brand-pale-gray px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs tracking-widest uppercase font-sans">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-light-gray mb-4 font-sans">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-brand-cream py-3.5 text-xs tracking-super-wide uppercase font-sans font-medium hover:bg-brand-gold transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
