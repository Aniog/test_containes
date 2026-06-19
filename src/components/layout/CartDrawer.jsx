import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  // Prevent body scroll when drawer is open
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

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/50 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-cream-100 z-50 shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-200">
            <h2 className="font-serif text-xl text-charcoal-900">Your Bag ({cartCount})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
              aria-label="Close cart"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-700 mb-2">Your bag is empty</p>
                <p className="text-sm text-charcoal-500 mb-6">
                  Discover our collection of demi-fine gold jewelry
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-secondary text-xs"
                >
                  Shop the Collection
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.variant || 'default'}-${index}`}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Product Image */}
                    <div className="w-24 h-30 bg-charcoal-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm text-charcoal-900 uppercase tracking-wide mb-1">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-charcoal-500 mb-2">{item.variant}</p>
                      )}
                      <p className="font-sans text-sm font-medium text-charcoal-800 mb-3">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium text-charcoal-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-charcoal-500 hover:text-charcoal-900 underline transition-colors"
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
            <div className="border-t border-charcoal-200 px-6 py-6 bg-cream-50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-900">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal-500 mb-4 text-center">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary mb-3">
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CartDrawer;
