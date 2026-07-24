import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-100 shadow-elevated animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-400">
          <h2 className="font-serif text-xl text-charcoal-800">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-400">Discover our collection and find your next treasure.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-cream-300 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-lg text-gold-500">{item.name.charAt(0)}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-sm text-charcoal-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal-700 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-cream-400 rounded flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal-700 w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-cream-400 rounded flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
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
          <div className="px-6 py-5 border-t border-cream-400 bg-cream-50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-charcoal-500">Subtotal</span>
              <span className="text-sm font-medium text-charcoal-800">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-charcoal-400 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs text-center text-charcoal-500 underline hover:text-charcoal-700 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
