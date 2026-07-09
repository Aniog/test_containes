import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isDrawerOpen, setIsDrawerOpen, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isDrawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-warm">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-velmora-muted-light mb-4" />
              <p className="font-serif text-lg text-velmora-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted-light mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={() => setIsDrawerOpen(false)}
                className="px-6 py-3 bg-velmora-base text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-velmora-warm">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 p-6">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wide uppercase">{item.product.name}</h3>
                    <p className="text-xs text-velmora-muted-light mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-2">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="p-1 border border-velmora-warm-dark hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-1 border border-velmora-warm-dark hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(index)}
                        className="ml-auto text-xs text-velmora-muted-light hover:text-velmora-base underline transition-colors"
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
          <div className="border-t border-velmora-warm p-6">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted-light mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-velmora-base text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-full py-3 mt-2 text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-base transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
