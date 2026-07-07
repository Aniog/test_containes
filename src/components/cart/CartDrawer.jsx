import React, { useEffect } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart()

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-[0.1em] uppercase">Your Bag</h2>
          <button onClick={closeCart} className="text-stone-500 hover:text-charcoal transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-stone-500 font-serif text-lg">Your bag is empty</p>
              <p className="text-stone-400 text-sm mt-2">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-stone-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-stone-300" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.1em] uppercase leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium mt-1">${item.price.toFixed(2)}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-7 h-7 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-7 h-7 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-stone-400 hover:text-charcoal underline transition-colors"
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
          <div className="flex-shrink-0 border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm tracking-[0.1em] uppercase">Subtotal</span>
              <span className="font-serif text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-champagne text-white py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-champagne-dark transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
