import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const total = getCartTotal()

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-vel-border-light">
          <div className="heading-serif text-xl tracking-[0.08em]">Your Cart</div>
          <button onClick={closeCart} className="p-2 -mr-2 text-vel-muted hover:text-vel-text">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-vel-muted mb-4">Your cart is empty</div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-gold-outline text-sm"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-vel-bg-alt flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <div className="product-name text-sm tracking-wider pr-2">{item.name}</div>
                        <div className="text-xs text-vel-muted mt-0.5">{item.selectedVariant} tone</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="qty-btn"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="qty-value">{item.quantity}</div>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="qty-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-vel-muted hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-vel-border-light bg-vel-bg">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-vel-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-vel-muted mb-4">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                onClick={() => {
                  closeCart()
                  // For now, just show a message - real checkout would be connected later
                  alert('Checkout would open here. This is a frontend preview.')
                }}
                className="btn btn-gold w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
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
