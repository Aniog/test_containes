import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h2 className="font-serif text-xl text-charcoal-900 tracking-wide">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6">
            <ShoppingBag className="w-16 h-16 text-charcoal-300 mb-4" />
            <p className="font-serif text-lg text-charcoal-600 mb-2">Your cart is empty</p>
            <p className="text-sm text-charcoal-400 mb-6 text-center">
              Discover our collection of demi-fine gold jewelry
            </p>
            <button
              onClick={closeCart}
              className="btn-secondary text-xs"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 bg-cream-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide text-charcoal-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal-500 mt-1">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-charcoal-800 mt-1">
                        ${item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-charcoal-200 rounded-full hover:border-charcoal-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-charcoal-200 rounded-full hover:border-charcoal-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="p-1 text-charcoal-400 hover:text-charcoal-600 transition-colors self-start"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-cream-200 px-6 py-5 bg-cream-50">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-900">${subtotal.toFixed(2)}</span>
              </div>
              
              <p className="text-xs text-charcoal-400 mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-primary w-full">
                Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-charcoal-600 hover:text-charcoal-900 underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
