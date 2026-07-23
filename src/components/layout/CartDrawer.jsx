import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slide-up"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-100">
          <h2 className="font-serif text-lg tracking-wider text-velvet-900">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="text-velvet-500 hover:text-velvet-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
              <p className="text-velvet-500 text-sm">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-xs tracking-wider uppercase text-gold hover:text-gold-600 font-medium transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                  <div className="w-20 h-20 flex-shrink-0 bg-velvet-50 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velvet-50 to-velvet-100 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-velvet-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs font-serif tracking-wider uppercase text-velvet-900">
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-velvet-500 mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant)}
                        className="text-velvet-400 hover:text-velvet-700 transition-colors ml-2"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velvet-200">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs text-velvet-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-velvet-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velvet-100 px-6 py-5">
            <div className="flex justify-between items-center mb-5">
              <span className="text-sm text-velvet-700">Subtotal</span>
              <span className="font-serif text-lg tracking-wider text-velvet-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-velvet-500 mb-5 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-sm py-3.5">
              Checkout — ${subtotal.toFixed(2)}
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-xs tracking-wider uppercase text-velvet-600 hover:text-gold transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
