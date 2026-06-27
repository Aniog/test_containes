import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, toggleDrawer, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-ivory z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider">YOUR BAG ({totalItems})</h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-muted mb-4" />
              <p className="font-serif text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-warm-gray mb-6">Discover our collection of demi-fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => toggleDrawer(false)}
                className="btn-gold"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-border-light overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-warm-gray capitalize mb-2">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-warm-gray hover:text-gold transition-colors underline"
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
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="btn-gold-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
