import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
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
        className={cn(
          'fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl transition-transform duration-300',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-200">
            <h2
              className="font-serif text-xl text-espresso"
              style={{ letterSpacing: '0.15em' }}
            >
              YOUR CART
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal-600 hover:text-espresso transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-600 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-charcoal-500 mb-6">
                  Discover our collection of elegant pieces
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-charcoal-200">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="p-6">
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-ivory-200 rounded overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3
                          className="product-name mb-1 truncate"
                          style={{ letterSpacing: '0.15em' }}
                        >
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-charcoal-500 mb-2">
                            {item.variant}
                          </p>
                        )}
                        <p className="font-sans text-sm text-charcoal-700 mb-3">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity & Remove */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-charcoal-200 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity - 1)
                              }
                              className="p-2 text-charcoal-600 hover:text-espresso transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-10 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity + 1)
                              }
                              className="p-2 text-charcoal-600 hover:text-espresso transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-xs text-charcoal-500 hover:text-red-600 transition-colors underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-charcoal-200 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-charcoal-600">Subtotal</span>
                <span className="font-sans font-medium text-espresso">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal-500">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary w-full text-center"
              >
                CHECKOUT
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-charcoal-600 hover:text-espresso transition-colors underline"
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
