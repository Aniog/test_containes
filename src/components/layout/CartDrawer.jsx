import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

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

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-soft-lg transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
            <h2 className="font-serif text-lg tracking-wide uppercase">
              Your Bag ({cartCount})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-600 mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-charcoal-400 mb-6 text-center">
                Discover our collection of demi-fine jewelry
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.variant}`}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-24 bg-charcoal-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="product-name text-xs text-charcoal-800">
                              {item.name}
                            </h3>
                            <p className="text-xs text-charcoal-500 mt-1 capitalize">
                              {item.variant} Tone
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="p-1 text-charcoal-400 hover:text-charcoal-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-charcoal-200 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity - 1)
                              }
                              className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
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
                              className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-sans text-sm font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-charcoal-200 px-6 py-6 bg-cream-100/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-charcoal-600">Subtotal</span>
                  <span className="font-sans font-medium">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <p className="text-xs text-charcoal-400 mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="btn-gold w-full mb-3">
                  Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 text-center text-xs tracking-wider uppercase text-charcoal-600 hover:text-charcoal-900 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
