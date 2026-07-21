import React from 'react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    removeFromCart, 
    updateQuantity, 
    toggleCart,
    getCartTotal 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl uppercase tracking-wider">
              Your Cart
            </h2>
            <button 
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-amber-50 flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-serif uppercase tracking-wider text-sm">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-sm text-gray-500 hover:text-red-500"
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
            <div className="border-t p-6">
              <div className="flex justify-between mb-4">
                <span className="uppercase tracking-wider text-sm">Total</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <button className="w-full bg-amber-700 text-white py-3 uppercase tracking-wider text-sm hover:bg-amber-800">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
