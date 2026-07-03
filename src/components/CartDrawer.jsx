import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-ultra-wide uppercase text-velmora-charcoal">
            Your Bag
          </h2>
          <button onClick={closeCart} className="text-velmora-warm-gray hover:text-velmora-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-velmora-warm-gray font-sans text-sm mb-6">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal px-8 py-3 hover:bg-velmora-gold-light transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-cream flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-ultra-wide uppercase text-velmora-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-velmora-warm-gray mt-1">{item.variant}</p>
                    <p className="text-sm font-sans text-velmora-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-velmora-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-velmora-warm-gray hover:text-velmora-charcoal underline transition-colors"
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
          <div className="border-t border-velmora-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-velmora-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-warm-gray mb-4">Shipping calculated at checkout</p>
            <button className="w-full font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal py-3 hover:bg-velmora-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
