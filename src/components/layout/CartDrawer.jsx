import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, closeCart } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-[80] shadow-elevated transition-transform duration-350 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <h2 className="font-serif text-heading-sm text-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-1" aria-label="Close cart">
            <X className="w-5 h-5 text-charcoal/60 hover:text-charcoal transition-colors" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-warm-gray-lighter mb-4" />
              <p className="font-serif text-heading-sm text-charcoal mb-2">Your bag is empty</p>
              <p className="text-body-sm text-warm-gray mb-6">
                Looks like you haven&rsquo;t added anything yet.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-8 py-3 bg-charcoal text-white text-body-sm font-medium tracking-wide uppercase rounded hover:bg-charcoal-light transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 py-4 border-b border-parchment/60 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-lg text-warm-gray-light">V</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-body font-medium text-charcoal uppercase tracking-wider">
                          {item.product.name}
                        </p>
                        <p className="text-body-sm text-warm-gray mt-0.5">
                          {item.variant.name}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-0.5 text-warm-gray-light hover:text-charcoal transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-parchment rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2.5 py-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-body-sm font-medium text-charcoal min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2.5 py-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-body font-medium text-charcoal">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-cream border-t border-parchment">
            <div className="flex items-center justify-between mb-4">
              <span className="text-body font-medium text-warm-gray uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-heading-sm text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-body-sm text-warm-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-charcoal text-white text-body font-medium tracking-wide uppercase rounded hover:bg-charcoal-light transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-2.5 text-body-sm text-warm-gray hover:text-charcoal transition-colors mt-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
