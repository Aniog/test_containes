import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/data/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-[70] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-cream z-[80] shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand/60">
          <h2 className="font-serif text-lg tracking-extra-wide uppercase text-brand-charcoal">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} className="text-brand-charcoal hover:text-brand-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-warm-gray font-sans mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs font-sans font-medium tracking-extra-wide uppercase bg-brand-gold text-white px-8 py-3 hover:bg-brand-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-warm rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-brand-sand" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-warm-gray font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-warm-gray hover:text-brand-gold font-sans underline transition-colors"
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
          <div className="border-t border-brand-sand/60 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-warm-gray">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-warm-gray font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white text-xs font-sans font-medium tracking-extra-wide uppercase py-3.5 hover:bg-brand-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
