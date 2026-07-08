import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-bg-card shadow-elevated animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider uppercase text-text">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-secondary hover:text-text transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-text-muted mb-4" />
              <p className="font-serif text-lg text-text-secondary mb-2">Your bag is empty</p>
              <p className="text-text-muted text-sm mb-6">Discover pieces crafted to be treasured.</p>
              <Link
                to="/collection"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-border-light last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-bg-elevated rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-text truncate">
                      {item.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-text font-medium text-sm mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border text-text-secondary hover:border-text transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium text-text w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border text-text-secondary hover:border-text transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-text-muted hover:text-text text-xs underline underline-offset-2 transition-colors duration-200"
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
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">Subtotal</span>
              <span className="text-text font-medium text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-text-muted text-xs">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-text-secondary text-sm underline underline-offset-2 hover:text-text transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
