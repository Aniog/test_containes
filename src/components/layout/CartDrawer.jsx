import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart, useCartDispatch } from '@/lib/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { cart, cartTotal, cartCount } = useCart()
  const dispatch = useCartDispatch()

  return (
    <div className={`fixed inset-0 z-[70] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-base/40" onClick={onClose} />
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-surface shadow-2xl transform transition-transform duration-400 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-accent" />
              <span className="font-sans text-sm uppercase tracking-[0.08em] font-medium text-base">
                Cart ({cartCount})
              </span>
            </div>
            <button onClick={onClose} className="p-1.5 hover:text-accent transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-muted">
                <ShoppingBag className="w-10 h-10 opacity-30" />
                <p className="font-sans text-sm">Your cart is empty</p>
                <Link to="/shop" onClick={onClose} className="text-accent font-sans text-xs underline underline-offset-4 hover:text-accent-hover transition-colors">
                  Browse the collection
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-border/60">
                    <div className="w-20 h-20 bg-border/40 flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-amber-100/80 to-amber-200/40" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={onClose}
                        className="product-name text-xs text-base hover:text-accent transition-colors block"
                      >
                        {item.name}
                      </Link>
                      <p className="font-sans text-sm text-muted mt-0.5">${item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-border">
                          <button
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-base transition-colors"
                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center font-sans text-xs text-base">
                            {item.quantity}
                          </span>
                          <button
                            className="w-7 h-7 flex items-center justify-center text-muted hover:text-base transition-colors"
                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="font-sans text-[11px] text-muted hover:text-red-600 transition-colors uppercase tracking-[0.05em]"
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
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
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-muted uppercase tracking-[0.05em]">Subtotal</span>
                <span className="font-sans text-lg font-medium text-base">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-[11px] text-muted">Shipping & taxes calculated at checkout</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-primary w-full block text-center"
              >
                Checkout
              </Link>
              <button
                onClick={() => { dispatch({ type: 'CLEAR_CART' }); onClose(); }}
                className="w-full text-center font-sans text-xs text-muted hover:text-base transition-colors uppercase tracking-[0.05em]"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
