import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../ui/Icon'
import { useCart } from '../../lib/cartContext'
import { formatPrice } from '../../lib/utils'

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

  const handleCheckout = () => {
    // Placeholder for checkout - would connect to real checkout later
    alert('Thank you for shopping with Velmora. Checkout would be implemented here.')
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <span className="text-sm tracking-[0.1em] uppercase">Your Cart ({cart.length})</span>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-velmora-text-muted hover:text-velmora-charcoal p-1 -mr-1"
              aria-label="Close cart"
            >
              <Icons.Close />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                      <div className="w-20 h-20 bg-velmora-warm-gray flex-shrink-0">
                        <img 
                          src={item.images?.[0]?.url} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <div className="product-name text-xs tracking-[0.1em] pr-4">{item.name}</div>
                            <div className="text-xs text-velmora-text-muted mt-0.5">
                              {item.selectedVariant} tone
                            </div>
                          </div>
                          <div className="text-sm whitespace-nowrap">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-velmora-border">
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="px-3 py-2 text-velmora-text-muted hover:text-velmora-charcoal min-w-[40px]"
                              aria-label="Decrease quantity"
                            >
                              <Icons.Minus />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="px-3 py-2 text-velmora-text-muted hover:text-velmora-charcoal min-w-[40px]"
                              aria-label="Increase quantity"
                            >
                              <Icons.Plus />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-xs text-velmora-text-muted hover:text-velmora-charcoal underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border px-6 py-6">
                <div className="flex justify-between text-sm mb-6">
                  <span className="tracking-[0.05em]">Total</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="btn btn-gold w-full mb-3"
                >
                  Proceed to Checkout
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-xs tracking-[0.08em] uppercase text-velmora-text-muted hover:text-velmora-charcoal"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <Icons.Cart className="w-10 h-10 text-velmora-border mb-4" />
              <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline"
              >
                Browse Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
