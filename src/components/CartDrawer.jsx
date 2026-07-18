import React from 'react'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-vel-border">
          <h2 className="serif text-xl">Your Cart</h2>
          <button onClick={closeCart} className="p-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-vel-muted mb-6">Your cart is empty</p>
            <Link to="/shop" onClick={closeCart} className="btn btn-primary">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-vel-bg-alt flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm">{item.name}</p>
                        <p className="text-xs text-vel-muted mt-0.5">
                          {item.selectedVariant} • {item.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-vel-muted hover:text-vel-deep"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-vel-border">
                        <button
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                          className="p-1.5 hover:bg-vel-bg-alt"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                          className="p-1.5 hover:bg-vel-bg-alt"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * (item.quantity || 1)).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-vel-border">
              <div className="flex justify-between mb-4 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-vel-muted mb-4">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  closeCart()
                  alert('Checkout would open here. This is a demo storefront.')
                }}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn btn-outline w-full text-center block"
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