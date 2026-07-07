import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart, useCartDispatch } from '../context/CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, totalItems, totalPrice } = useCart()
  const dispatch = useCartDispatch()

  const handleQuantity = (key, delta) => {
    const item = items.find((i) => i.key === key)
    if (!item) return
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { key, quantity: item.quantity + delta },
    })
  }

  const handleRemove = (key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key })
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#1a1a1a]">Your Cart</h2>
              <p className="text-sm text-taupe">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-[#1a1a1a] hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe/40 mb-4" />
                <p className="text-taupe font-medium">Your cart is empty</p>
                <p className="text-sm text-taupe/60 mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 py-4 border-b border-warm-border/50"
                  >
                    <div className="w-20 h-20 bg-ivory flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-[#1a1a1a] truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-[#1a1a1a] mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-warm-border">
                          <button
                            onClick={() => handleQuantity(item.key, -1)}
                            className="p-1.5 hover:bg-ivory transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantity(item.key, 1)}
                            className="p-1.5 hover:bg-ivory transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(item.key)}
                          className="text-xs text-taupe hover:text-[#1a1a1a] transition-colors underline"
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
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#1a1a1a]">Subtotal</span>
                <span className="font-serif text-lg font-semibold text-[#1a1a1a]">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-[#1a1a1a] text-white py-3.5 text-sm font-medium tracking-wider uppercase hover:bg-[#333] transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-taupe hover:text-[#1a1a1a] transition-colors underline"
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