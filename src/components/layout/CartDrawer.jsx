import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const CartDrawer = () => {
  const { 
    cart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    isLoading 
  } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-800/10">
            <h2 className="font-serif text-xl font-semibold text-charcoal-900">
              Your Bag
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-charcoal-800 hover:text-charcoal-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <ShoppingBag className="w-16 h-16 text-charcoal-800/30 mb-6" />
              <p className="font-serif text-lg text-charcoal-900 mb-2">
                Your bag is empty
              </p>
              <p className="font-sans text-sm text-charcoal-800/70 mb-8 text-center">
                Discover our collection of demi-fine gold jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-charcoal-900 text-cream-50 px-8 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 bg-cream-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-medium text-charcoal-900 uppercase tracking-wide">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="font-sans text-xs text-charcoal-800/70 mt-1">
                          {item.variant}
                        </p>
                      )}
                      <p className="font-sans text-sm text-charcoal-900 mt-2">
                        {formatPrice(item.price)}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-charcoal-800/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-cream-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 font-sans text-sm min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-cream-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="font-sans text-xs text-charcoal-800/70 hover:text-charcoal-900 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-charcoal-800/10 px-6 py-6 bg-cream-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm text-charcoal-900">
                    Subtotal
                  </span>
                  <span className="font-serif text-lg font-semibold text-charcoal-900">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <p className="font-sans text-xs text-charcoal-800/70 mb-6">
                  Shipping and taxes calculated at checkout
                </p>
                <button
                  disabled={isLoading}
                  className="w-full bg-charcoal-900 text-cream-50 py-4 font-sans text-sm font-medium tracking-wider uppercase hover:bg-charcoal-800 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Adding...' : 'Checkout'}
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-3 py-3 font-sans text-sm text-charcoal-900 tracking-wider uppercase hover:text-gold-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
