import React from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <h2 className="font-serif text-xl text-stone-900">
              Shopping Bag ({items.length})
            </h2>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-600 mb-4">Your bag is empty</p>
              <button
                onClick={() => setCartOpen(false)}
                className="text-amber-700 text-sm tracking-widest uppercase font-medium hover:text-amber-800"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-24 bg-stone-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-stone-900 text-sm mb-1">
                          {item.name}
                        </h3>
                        <p className="text-stone-500 text-xs capitalize mb-2">
                          {item.variant}
                        </p>
                        <p className="text-stone-900 font-medium text-sm">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-stone-600" />
                      </button>
                      <span className="text-stone-900 text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-stone-600" />
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
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-serif text-xl text-stone-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-stone-500 text-xs">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-stone-600 py-3 text-sm tracking-widest uppercase font-medium hover:text-stone-900 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
