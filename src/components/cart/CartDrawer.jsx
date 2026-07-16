import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora!\n\nThis is a demo storefront. In a production environment, this would redirect to a secure checkout.')
    closeCart()
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#EDE8E0]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-serif text-xl">Your Cart</h2>
            </div>
            <button 
              onClick={closeCart} 
              className="p-2 hover:bg-[#F5F1E9] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F1E9] flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-widest">{item.name}</p>
                          <p className="text-xs text-[#5C5349] mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <p className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#EDE8E0]">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F5F1E9] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F5F1E9] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#5C5349] hover:text-[#1A1816] underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#EDE8E0] bg-white">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-[#5C5349] mb-4">
                  Shipping calculated at checkout. Free worldwide shipping on orders over $75.
                </p>
                <button 
                  onClick={handleCheckout}
                  className="btn btn-primary w-full mb-3"
                >
                  Proceed to Checkout
                </button>
                <button 
                  onClick={closeCart}
                  className="btn btn-outline w-full"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[#EDE8E0] mb-4" />
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[#5C5349] mb-6">Discover our collection of demi-fine jewelry</p>
              <button onClick={closeCart} className="btn btn-primary">
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
