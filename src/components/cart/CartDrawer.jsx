import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 overlay-enter"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col drawer-enter">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <h2 className="font-serif text-lg tracking-wider text-velmora-charcoal">YOUR BAG</h2>
          <button onClick={closeDrawer} className="p-1 text-velmora-muted hover:text-velmora-charcoal transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-divider mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted font-sans mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="px-8 py-3 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-warm-gray flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs text-velmora-muted tracking-wider uppercase text-center px-1">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-product uppercase text-velmora-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted font-sans mt-0.5">{item.tone} tone</p>
                    <p className="text-sm font-sans font-medium text-velmora-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-velmora-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-velmora-muted hover:text-velmora-charcoal font-sans underline transition-colors"
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
          <div className="border-t border-velmora-divider px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-velmora-muted uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-serif text-velmora-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
