import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { 
    cart, 
    cartTotal, 
    isCartOpen, 
    isLoading,
    closeCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  const drawerRef = useRef(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, closeCart]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };

    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-primary)] shadow-2xl transform transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 
            className="text-lg tracking-widest uppercase" 
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Your Cart ({cart.length})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] p-8">
            <ShoppingBag size={48} strokeWidth={1} className="text-[var(--color-border)] mb-4" />
            <p className="text-[var(--color-text-secondary)] mb-6">Your cart is empty</p>
            <button
              onClick={closeCart}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex flex-col h-[calc(100%-200px)] overflow-y-auto p-6">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${item.variant}-${index}`}
                  className="flex gap-4 py-4 border-b border-[var(--color-border)] last:border-0"
                >
                  {/* Image */}
                  <div className="w-24 h-24 flex-shrink-0 bg-[var(--color-cream)] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 
                        className="product-name text-sm leading-tight"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                          {item.variant}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-[var(--color-cream)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-[var(--color-cream)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[var(--color-primary)] border-t border-[var(--color-border)]">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>

              {/* Shipping Notice */}
              <p className="text-xs text-[var(--color-text-secondary)] mb-4 text-center">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn btn-primary w-full"
              >
                Checkout
              </Link>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
