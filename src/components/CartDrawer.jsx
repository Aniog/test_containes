import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <span className="text-sm tracking-[0.15em] uppercase">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm font-medium pr-6">{item.name}</div>
                          <div className="text-xs text-[#6B665F] mt-0.5">
                            {item.selectedVariant} Tone
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#6B665F] hover:text-[#2C2823]"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD3]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F5F1EA]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F5F1EA]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="text-xs text-[#6B665F]">
                  Shipping calculated at checkout
                </div>
                <button className="btn btn-primary w-full">
                  Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn btn-outline w-full text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#E5DFD3] mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B665F] mb-8">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer

import { ShoppingBag } from 'lucide-react'