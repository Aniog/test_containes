import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();
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
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
            <h2 className="font-serif text-xl tracking-wide text-charcoal-800">
              Your Bag
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-600 mb-2">
                  Your bag is empty
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Discover our collection of demi-fine jewelry
                </p>
                <Link
                  to="/collection"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-28 bg-cream-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="product-name text-xs mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-charcoal-500 mb-1">
                          {item.variant}
                        </p>
                        <p className="text-sm font-medium text-charcoal-800">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-charcoal-400 hover:text-charcoal-600 underline transition-colors"
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
          {cart.length > 0 && (
            <div className="px-6 py-6 border-t border-charcoal-100 bg-cream-50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-charcoal-600">
                  Subtotal
                </span>
                <span className="font-serif text-lg text-charcoal-800">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal-400 mb-4 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full btn-primary text-xs">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
