import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transform transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cream-300">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-charcoal-700" />
            <h2 className="font-serif text-xl tracking-wide text-charcoal-900">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold-500 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="font-serif text-xl text-charcoal-700 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-500">Add some beautiful pieces to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.variant}`}
                className="flex gap-4 pb-6 border-b border-cream-200 last:border-0"
              >
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 bg-cream-200 rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-base tracking-wide text-charcoal-900 uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal-500 capitalize mt-1">
                        {item.variant} tone
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="p-1 hover:text-gold-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4 text-charcoal-400" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-cream-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 hover:bg-cream-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 hover:bg-cream-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-sans text-sm font-medium text-charcoal-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-cream-50 border-t border-cream-300">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-charcoal-600">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-charcoal-500 mb-4">
              Shipping & taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="w-full btn-primary py-4 text-center">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-charcoal-600 hover:text-gold-500 transition-colors mt-3 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
