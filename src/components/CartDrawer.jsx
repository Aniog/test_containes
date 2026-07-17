import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="hover:text-amber-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="font-sans text-gray-600 mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="text-amber-600 hover:underline font-sans text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <Link 
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="w-20 h-20 bg-gray-50 flex-shrink-0"
                    >
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link 
                        to={`/product/${item.product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-serif text-sm uppercase tracking-wide hover:text-amber-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="font-sans text-xs text-gray-600 mt-1">Variant: {item.variant}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-sans text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="font-sans text-xs text-gray-500 hover:text-red-500 transition-colors mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6">
              <div className="flex justify-between mb-4">
                <span className="font-sans text-sm uppercase tracking-wide">Subtotal</span>
                <span className="font-sans text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-gray-500 mb-4">Shipping calculated at checkout</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 font-sans text-sm uppercase tracking-wide transition-colors duration-300">
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-2 border border-gray-300 hover:border-amber-600 py-3 font-sans text-sm uppercase tracking-wide transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
