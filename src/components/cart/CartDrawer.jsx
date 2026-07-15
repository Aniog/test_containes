import { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen, cartItems]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading text-xl tracking-wider">YOUR BAG</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[var(--velmora-accent)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <p className="velmora-heading text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {cartItems.map((item) => {
                const product = products.find(p => p.id === item.productId);
                return (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-[var(--velmora-bg-secondary)] flex-shrink-0 rounded-sm" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium tracking-wide truncate">{item.shortName}</h3>
                      <p className="text-xs text-[var(--velmora-text-muted)] mt-1">{item.variant} tone</p>
                      <p className="text-sm mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-1 hover:text-[var(--velmora-accent)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-1 hover:text-[var(--velmora-accent)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.productId, item.variant)}
                          className="ml-auto p-1 text-[var(--velmora-text-light)] hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="velmora-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)]">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="velmora-btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
