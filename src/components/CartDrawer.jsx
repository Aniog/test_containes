import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] flex flex-col open">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <span className="text-sm tracking-[0.1em] uppercase">Your Cart</span>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map(item => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-wider pr-2">{item.name}</div>
                        <div className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2825]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.cartQuantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.cartQuantity).toFixed(2)}
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
              <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm tracking-[0.05em] hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD3] mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-[#6B665F] mb-8">Discover our collection of fine jewelry</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn-primary"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer