import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    cartTotal,
    isCartOpen,
    isLoading,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
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
  }, []);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warmstone-900/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warmstone-200">
          <h2 className="font-serif text-xl text-warmstone-900">
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-warmstone-600 hover:text-warmstone-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-warmstone-100 flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-warmstone-400" />
            </div>
            <p className="font-serif text-lg text-warmstone-700 mb-2">
              Your cart is empty
            </p>
            <p className="text-sm text-warmstone-500 mb-6 text-center">
              Discover our collection of demi-fine jewelry
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="px-8 py-3 bg-warmstone-900 text-cream-50 text-sm font-medium tracking-wide hover:bg-warmstone-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-warmstone-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-warmstone-900">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warmstone-500 mt-1">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-warmstone-900 mt-1">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warmstone-200">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-1.5 text-warmstone-600 hover:text-warmstone-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium text-warmstone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-1.5 text-warmstone-600 hover:text-warmstone-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-warmstone-500 hover:text-red-600 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-warmstone-200 px-6 py-6 bg-cream-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-warmstone-600">Subtotal</span>
                <span className="font-serif text-lg text-warmstone-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warmstone-500 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button
                disabled={isLoading}
                className="w-full py-4 bg-warmstone-900 text-cream-50 font-medium tracking-wide hover:bg-warmstone-800 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Adding...' : 'Checkout'}
              </button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-3 mt-2 text-center text-sm text-warmstone-600 hover:text-warmstone-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
