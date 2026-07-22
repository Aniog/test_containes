import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();
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
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-elevated flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-text">Your Bag</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-text-muted hover:text-text transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-12 h-12 text-border mb-4" />
            <p className="text-text-muted text-center mb-6">
              Your bag is empty
            </p>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white text-sm font-medium tracking-extra-wide uppercase hover:bg-accent-dark transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-bg-alt rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="product-name text-text">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs text-text-light capitalize">
                            {item.variant} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 text-text-light hover:text-text transition-colors duration-200"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-text-muted hover:text-text transition-colors duration-200"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-text">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-text-muted hover:text-text transition-colors duration-200"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-medium text-text">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-6 bg-white">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-text-muted">Subtotal</span>
                <span className="font-medium text-text">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-xs text-text-light mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-accent text-white text-sm font-medium tracking-extra-wide uppercase hover:bg-accent-dark transition-colors duration-200">
                Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 py-2 text-sm text-text-muted hover:text-text transition-colors duration-200 underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
