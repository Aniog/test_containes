import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-lg tracking-wide text-stone-900">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-stone-500 hover:text-stone-900 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
              <p className="font-serif text-lg text-stone-500 mb-2">Your bag is empty</p>
              <p className="text-sm text-stone-400 mb-6">Discover something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-8 py-3 bg-stone-900 text-cream text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-ivory rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-taupe font-serif text-center leading-tight">{item.name.split(' ').slice(0, 2).join(' ')}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wide uppercase text-stone-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium text-stone-900 mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium text-stone-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-xs text-stone-400 hover:text-stone-900 underline transition-colors"
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
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone-500">Subtotal</span>
              <span className="font-serif text-lg text-stone-900">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-stone-900 text-cream text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
