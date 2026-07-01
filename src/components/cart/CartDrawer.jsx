import { useState, useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext)

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-light tracking-wide font-serif">YOUR CART</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 font-light">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-light tracking-wide uppercase">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">${item.price}</p>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light tracking-wide uppercase">Total</span>
                <span className="text-lg font-light">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={toggleCart}
                className="block w-full bg-amber-800 text-white text-center py-3 text-sm tracking-wide uppercase hover:bg-amber-900 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
