import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, setIsCartOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50 animate-fade-in"
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50',
          'flex flex-col shadow-2xl animate-slide-in-right'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl text-charcoal-900">
            Your Cart ({cartCount})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-700 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-charcoal-500 mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li 
                  key={`${item.product.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-32 flex-shrink-0 bg-cream-100 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs mb-1">
                        {item.product.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-charcoal-500 mb-2">
                          {item.variant.charAt(0).toUpperCase() + item.variant.slice(1)}
                        </p>
                      )}
                      <p className="font-sans text-sm text-charcoal-900">
                        ${item.product.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="p-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="p-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-xs text-charcoal-500 hover:text-charcoal-900 underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-charcoal-100 px-6 py-6 space-y-4 bg-cream-50">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-medium text-charcoal-900">${cartTotal.toFixed(2)}</span>
            </div>

            <p className="text-xs text-charcoal-500">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-charcoal-600 hover:text-charcoal-900 underline transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
