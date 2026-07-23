import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 240px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-sand mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-graphite">
                Discover our collection of handcrafted demi-fine jewelry.
              </p>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-0">
              {items.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-5 border-b border-sand last:border-b-0"
                >
                  {/* Product image placeholder */}
                  <div
                    className="w-20 h-24 bg-warm-gray flex-shrink-0 flex items-center justify-center"
                  >
                    <span className="font-serif text-gold text-xs uppercase tracking-widest">
                      V
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-serif text-sm uppercase tracking-widest-plus text-charcoal truncate"
                      id={`product-name-${item.id}`}
                    >
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-graphite mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-sans text-sm text-charcoal mt-2 font-medium">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-charcoal hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-charcoal hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-graphite hover:text-gold transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-graphite uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-sans text-xs text-graphite mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-center">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
