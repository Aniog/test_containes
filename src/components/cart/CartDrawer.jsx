import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
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
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-brand-50 shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-espresso-800" />
            <h2 className="font-serif text-xl tracking-wide text-espresso-950">
              Your Cart
            </h2>
            <span className="text-xs font-semibold text-brand-500 bg-brand-100 px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-espresso-600 hover:text-espresso-950 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-brand-300 mb-4" />
              <p className="font-serif text-xl text-espresso-800 mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-600 mb-6">Discover our curated collection</p>
              <button
                onClick={closeCart}
                className="btn-outline text-xs px-6 py-2.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 p-4 bg-white rounded-lg border border-brand-100"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-100 to-warm-200 rounded-md flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-400 text-xs font-serif">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm !tracking-wide mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-warm-600 mb-2">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-brand-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-espresso-600 hover:text-espresso-950 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-espresso-900 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-espresso-600 hover:text-espresso-950 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="price-text text-sm">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 text-warm-400 hover:text-espresso-900 transition-colors self-start"
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
          <div className="border-t border-brand-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-espresso-700">Subtotal</span>
              <span className="price-text">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-warm-500">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-sm">
              Checkout — {formatPrice(totalPrice)}
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-warm-600 hover:text-espresso-900 transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
