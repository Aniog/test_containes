import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-velmora-black/50 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-luxury-lg transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
            <h2 className="font-serif text-heading-3 text-velmora-charcoal">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="text-caption text-velmora-muted">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-muted hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-muted/30 mb-4" />
              <p className="font-serif text-heading-3 text-velmora-charcoal mb-2">
                Your cart is empty
              </p>
              <p className="text-body-sm text-velmora-muted mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-gold/10 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-warm-white flex-shrink-0 flex items-center justify-center">
                    <span className="text-caption text-velmora-muted uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-body-sm font-medium text-velmora-charcoal uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-caption text-velmora-muted mt-1">
                      {item.variant}
                    </p>
                    <p className="text-body font-medium text-velmora-charcoal mt-2">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-gold/20 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal hover:border-velmora-gold transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-body-sm font-medium text-velmora-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-gold/20 flex items-center justify-center text-velmora-muted hover:text-velmora-charcoal hover:border-velmora-gold transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-caption text-velmora-muted hover:text-red-500 transition-colors uppercase tracking-wide"
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
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-cream border-t border-velmora-gold/10 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-body font-medium text-velmora-charcoal uppercase tracking-wide">
                Subtotal
              </span>
              <span className="text-heading-3 font-serif text-velmora-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-caption text-velmora-muted mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary py-4">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-caption text-velmora-muted hover:text-velmora-gold transition-colors uppercase tracking-ultra-wide text-center py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
