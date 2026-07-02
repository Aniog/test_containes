import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <h2 className="font-serif text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#6B635E] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                    <img 
                      src={item.images[item.selectedVariant]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B635E] mt-0.5 capitalize">{item.selectedVariant} tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B635E] hover:text-[#2C2522]"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E5DFD3]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DFD3]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD3] px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#6B635E]">Shipping calculated at checkout</p>
              
              <button 
                onClick={() => {
                  alert('Checkout would be implemented here. Cart total: ' + formatPrice(cartTotal))
                  clearCart()
                  setIsCartOpen(false)
                }}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer