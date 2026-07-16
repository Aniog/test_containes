import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal-900/40 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={cn(
        'fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 shadow-elevated transition-transform duration-500 ease-luxury flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h2 className="font-serif text-lg tracking-wide text-charcoal-800">
            Your Cart ({items.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-400">Discover our collection and find your perfect piece.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold-100 to-cream-300 flex items-center justify-center">
                      <span className="text-gold-600 text-xs font-serif">{item.product.name.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs tracking-product uppercase text-charcoal-800 font-medium truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal-700 mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-charcoal-200 rounded flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-charcoal-700 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-charcoal-200 rounded flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-charcoal-400 underline hover:text-charcoal-700 transition-colors"
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
          <div className="border-t border-cream-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-800">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal-800 text-cream-100 py-3.5 text-xs tracking-nav uppercase font-medium hover:bg-charcoal-700 transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs tracking-nav uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
