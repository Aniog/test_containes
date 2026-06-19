import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-500/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h2 className="font-serif text-lg tracking-wider text-charcoal-400">Your Cart</h2>
          <button onClick={closeDrawer} className="p-2 -mr-2" aria-label="Close cart">
            <X className="w-5 h-5 text-charcoal-100" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-cream-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-200 mb-2">Your cart is empty</p>
              <p className="text-xs text-charcoal-50 mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="btn-primary inline-block"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-5 border-b border-cream-200 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold-400 font-serif text-xs">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-[11px] mb-1 truncate">{item.name}</h3>
                    <p className="text-[11px] text-charcoal-50 mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-cream-300 flex items-center justify-center hover:border-gold-500 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-charcoal-100" />
                        </button>
                        <span className="text-xs font-medium text-charcoal-400 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-cream-300 flex items-center justify-center hover:border-gold-500 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-charcoal-100" />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-charcoal-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1"
                    aria-label="Remove item"
                  >
                    <X className="w-3.5 h-3.5 text-charcoal-50 hover:text-charcoal-400 transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-cream-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest-xl text-charcoal-50">Subtotal</span>
              <span className="text-base font-medium text-charcoal-400">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-charcoal-50 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center">Checkout</button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-[11px] uppercase tracking-widest-xl text-charcoal-50 mt-3 hover:text-gold-500 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
