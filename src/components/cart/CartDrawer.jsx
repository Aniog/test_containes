import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

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
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-lg tracking-wide text-charcoal">
            Your Bag ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal/20 mb-4" />
              <p className="font-serif text-lg text-charcoal/60">Your bag is empty</p>
              <p className="text-sm text-charcoal/40 mt-1 font-sans">
                Discover our collection of fine jewelry
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-8 py-3 bg-gold text-cream text-xs tracking-product font-sans font-medium hover:bg-gold-hover transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => {
                const product = products.find(p => p.id === item.id)
                return (
                  <div key={item.key} className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-ivory flex-shrink-0 overflow-hidden flex items-center justify-center">
                      {product ? (
                        <span className="font-serif text-2xl text-gold/40">
                          {item.name.charAt(0)}
                        </span>
                      ) : (
                        <ShoppingBag className="w-6 h-6 text-charcoal/20" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-product text-charcoal uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal/50 font-sans mt-0.5">{item.variant}</p>
                      <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.price}</p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-xs font-sans text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs text-charcoal/40 hover:text-charcoal font-sans underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-charcoal/60">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-charcoal/40 font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-cream text-xs tracking-product font-sans font-medium hover:bg-gold-hover transition-colors">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
