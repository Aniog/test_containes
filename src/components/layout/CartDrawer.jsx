import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, cartTotal, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-elevated flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between section-padding py-5 border-b border-ink-100/40">
          <h2 className="font-serif text-xl font-medium text-ink-800">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-1 text-ink-400 hover:text-ink-700 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-ink-200 mb-4" />
              <p className="font-serif text-xl text-ink-500 mb-2">Your cart is empty</p>
              <p className="text-sm text-ink-300 mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4 px-5">
              {items.map(({ product, variant, quantity }) => (
                <div
                  key={`${product.id}-${variant}`}
                  className="flex gap-4 py-4 border-b border-ink-100/30 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-ink-300 text-xs">IMG</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium tracking-ultra-wide uppercase text-ink-700 truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-ink-300 mt-0.5">{variant}</p>
                    <p className="text-sm font-medium text-gold-600 mt-1">
                      {formatPrice(product.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(`${product.id}-${variant}`, quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-ink-200 text-ink-500 hover:border-ink-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-ink-700 w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(`${product.id}-${variant}`, quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-ink-200 text-ink-500 hover:border-ink-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(`${product.id}-${variant}`)}
                    className="text-ink-300 hover:text-ink-600 transition-colors self-start p-1"
                    aria-label={`Remove ${product.name}`}
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
          <div className="border-t border-ink-100/40 px-5 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-sm text-ink-400 uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-xl font-medium text-ink-800">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-ink-300">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary py-4">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-ink-400 hover:text-ink-600 tracking-wide uppercase transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
