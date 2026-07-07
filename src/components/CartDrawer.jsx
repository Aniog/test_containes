import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
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
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
            <span className="text-sm tracking-[0.15em] uppercase">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto px-6 py-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 py-4 border-b border-[#F0EBE3]">
                    <div className="w-20 h-20 bg-[#1A1816] flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="product-name text-xs tracking-[0.1em] pr-6 mb-1">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#6B665F] mb-2">
                        {item.selectedVariant} · ${item.price}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#E5E0D8]">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#6B665F] hover:text-[#2C2825]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#E5E0D8]">
                <div className="flex justify-between mb-4 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <p className="text-xs text-[#6B665F] mb-4">
                  Shipping calculated at checkout
                </p>
                <button className="btn-primary w-full mb-3">
                  Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline w-full text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <ShoppingBag size={48} className="text-[#E5E0D8] mb-4" />
              <p className="text-[#6B665F] mb-6">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Browse Collection
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
