import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-black/50 backdrop-blur-sm animate-fade-in" />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-brand-ivory shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-sand">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag ({cartCount})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-brand-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-sand mb-4" />
              <p className="font-serif text-lg text-brand-warmgray mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-warmgray/70">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-cream rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-brand-sand" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-brand-black truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-warmgray capitalize mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-sand rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-brand-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-brand-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-brand-warmgray underline hover:text-brand-black transition-colors"
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
          <div className="border-t border-brand-sand p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-brand-warmgray">Subtotal</span>
              <span className="font-serif text-lg">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-brand-warmgray/70">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary justify-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full btn-outline justify-center text-xs"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
