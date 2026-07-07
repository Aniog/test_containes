import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-base/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-warm/50">
            <h2 className="font-serif text-xl">Shopping Bag ({totalItems})</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-text-muted mb-4" />
                <p className="font-serif text-lg text-velmora-text-light mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-velmora-text-muted mb-6">Discover our collection of demi-fine jewelry</p>
                <Link
                  to="/shop"
                  className="btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wide-luxury uppercase">{item.name}</h3>
                      <p className="font-sans text-xs text-velmora-text-light mt-1">{item.variant}</p>
                      <p className="font-sans text-sm mt-2">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border border-velmora-warm hover:border-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border border-velmora-warm hover:border-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-warm/50 px-6 py-4 space-y-4">
              <div className="flex justify-between">
                <span className="font-sans text-sm">Subtotal</span>
                <span className="font-sans text-sm font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-velmora-text-muted">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <Link
                to="/shop"
                className="block text-center font-sans text-xs tracking-wide-luxury uppercase text-velmora-text-light hover:text-velmora-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
