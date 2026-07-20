import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductImageUrl } from '../../lib/productImages';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } = useCart();
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
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl tracking-ultra-wide text-charcoal-900">
            YOUR CART ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal-400 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-300 mb-6">Discover our collection of fine jewelry</p>
              <button
                onClick={closeCart}
                className="btn-primary text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-charcoal-100 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-charcoal-100 flex-shrink-0 overflow-hidden">
                    {getProductImageUrl(item.id) ? (
                      <img
                        src={getProductImageUrl(item.id)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-charcoal-300">
                        <ShoppingBag className="w-8 h-8" strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-ultra-wide uppercase text-charcoal-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal-900 mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-200 text-charcoal-500 hover:border-charcoal-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-charcoal-200 text-charcoal-500 hover:border-charcoal-400 transition-colors"
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
          <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-charcoal-500">Subtotal</span>
              <span className="font-serif text-lg tracking-wide text-charcoal-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full text-xs">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-charcoal-500 underline hover:text-charcoal-800 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
