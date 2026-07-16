import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream-light z-50 shadow-2xl transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <h2 className="font-serif text-xl tracking-wider text-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-gold/40 mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-light">
                Looks like you haven't added any treasures yet.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex gap-4 pb-6 border-b border-gold/10 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-24 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-gold/30" />
                    </div>
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-label text-charcoal-light mb-1">
                          {item.color === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                        <h3 className="font-serif text-base text-charcoal tracking-wide uppercase">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.color)}
                        className="p-1 hover:text-gold transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 border border-gold/20 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-medium text-charcoal">
                        {formatPrice(item.price * item.quantity)}
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
          <div className="absolute bottom-0 left-0 right-0 bg-cream-light border-t border-gold/15 px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-charcoal-light">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-charcoal-light mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full justify-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
