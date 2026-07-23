import React from 'react'
import { useCart } from './CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isOpen, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-stone-900 z-50 shadow-2xl transform transition-transform duration-300 ease-out border-l border-stone-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-700">
          <h2 className="font-serif text-xl tracking-widest uppercase text-stone-50">
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="text-stone-400 hover:text-stone-50 transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-stone-400">
              <ShoppingBag className="w-12 h-12 mb-4" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-2">Discover something beautiful to add.</p>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.productId}-${item.tone}`} className="flex gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-stone-800 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="font-serif text-xs uppercase tracking-widest text-gold/60">{item.product.name.split(' ').slice(0, 2).join(' ')}</span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50 truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    {item.tone === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </p>
                  <p className="text-gold font-medium mt-1">${item.product.price}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.tone, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center border border-stone-600 text-stone-400 hover:border-gold hover:text-gold transition-colors rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm text-stone-50 w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.tone, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center border border-stone-600 text-stone-400 hover:border-gold hover:text-gold transition-colors rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.productId, item.tone)}
                      className="text-xs text-stone-500 hover:text-stone-300 transition-colors ml-auto"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-700 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-stone-400 text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-stone-50">${totalPrice}</span>
            </div>
            <p className="text-xs text-stone-500 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-stone-900 font-serif uppercase tracking-widest py-3 text-sm hover:bg-gold-light transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
