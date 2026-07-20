import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would be connected to a payment processor in production.')
    setIsCartOpen(false)
  }

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-md bg-velmora-bg z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium tracking-wider text-sm">YOUR CART</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-velmora-surface rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
            <p className="text-velmora-text-light mb-2">Your cart is empty</p>
            <p className="text-sm text-velmora-text-light">Discover our collection and find something beautiful.</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline mt-6"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-surface flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="product-name text-sm tracking-widest">{item.name}</p>
                        <p className="text-xs text-velmora-text-light mt-0.5 capitalize">{item.selectedVariant} tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-light hover:text-velmora-text p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm mt-1">{formatPrice(item.price)}</p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-surface"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-surface"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-text-light">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-velmora-text-light">Shipping calculated at checkout</p>
              
              <button 
                onClick={handleCheckout}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
