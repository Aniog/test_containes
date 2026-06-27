import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white-soft shadow-xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 md:h-20 border-b border-border-light">
            <h2 className="text-lg font-serif">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:opacity-60" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <ShoppingBag size={40} className="text-charcoal-light/40 mb-4" />
                <p className="text-charcoal-light text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-xs uppercase tracking-[0.15em] text-gold font-medium hover:opacity-70"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border-light">
                    <Link to={`/product/${item.id}`} onClick={onClose} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover bg-warm-ivory"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={onClose}
                        className="text-product-name block truncate"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-charcoal-light mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-border-medium rounded">
                          <button
                            className="p-1.5 hover:bg-warm-ivory transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:bg-warm-ivory transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          className="text-xs text-charcoal-light hover:text-rose transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
          {cart.length > 0 && (
            <div className="border-t border-border-light px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="text-lg font-serif font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-light">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-charcoal text-white py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-charcoal-light transition-colors">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs uppercase tracking-[0.12em] text-charcoal-light hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}