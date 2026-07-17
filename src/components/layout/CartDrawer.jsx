import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '@/store/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const drawerRef = useRef(null);
  const total = getCartTotal();

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory-50 shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <h2 className="text-heading text-xl tracking-wider text-velvet-950">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-velvet-950" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
              <p className="text-heading text-lg text-velvet-950 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-obsidian-muted mb-6">
                Discover our collection of handcrafted jewelry.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-velvet-100 last:border-0"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velvet-100 rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gold-100 to-velvet-200 flex items-center justify-center">
                      <span className="text-gold-500 text-lg">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-xs text-velvet-950 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-obsidian-muted mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velvet-950 mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velvet-200 flex items-center justify-center hover:border-velvet-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-velvet-950" />
                      </button>
                      <span className="text-xs font-medium text-velvet-950 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velvet-200 flex items-center justify-center hover:border-velvet-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-velvet-950" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 hover:opacity-60 transition-opacity"
                    aria-label="Remove item"
                  >
                    <X className="w-3.5 h-3.5 text-obsidian-muted" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-obsidian-muted">Subtotal</span>
              <span className="text-lg font-medium text-velvet-950">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-obsidian-muted">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-gold w-full text-xs">
              Checkout — ${total.toFixed(2)}
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-obsidian-muted hover:text-velvet-950 transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
