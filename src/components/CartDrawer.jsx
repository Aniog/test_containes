import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import Button from './ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-brand-near-black/50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md z-50 bg-brand-ivory shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-light-gray">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-charcoal" />
            <h2 className="font-serif text-xl font-medium">Your Cart</h2>
            {totalItems > 0 && (
              <span className="text-sm text-brand-warm-gray">({totalItems})</span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-brand-warm-gray hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 240px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag className="w-12 h-12 text-brand-light-gray mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-warm-gray mb-6">
                Discover our curated collection of fine jewelry.
              </p>
              <Button variant="secondary" size="sm" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 p-4 bg-white rounded-sm border border-brand-light-gray"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-off-white rounded-sm overflow-hidden flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs text-brand-medium-gray">Image</span>
                    </div>
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-warm-gray mt-1 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-sm font-semibold text-brand-charcoal mt-2">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-light-gray hover:border-brand-gold text-brand-warm-gray hover:text-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-brand-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-brand-light-gray hover:border-brand-gold text-brand-warm-gray hover:text-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 text-brand-medium-gray hover:text-red-500 transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-brand-light-gray px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-warm-gray">Subtotal</span>
              <span className="text-lg font-semibold text-brand-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-brand-warm-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
