import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

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
    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 transition-opacity"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md animate-slide-in-right"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: 'var(--color-champagne)' }}
        >
          <h2 className="font-serif text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Your Bag ({cart.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 transition-opacity hover:opacity-60"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" style={{ color: 'var(--color-espresso)' }} />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center">
            <ShoppingBag className="w-12 h-12 mb-4 opacity-30" style={{ color: 'var(--color-taupe)' }} />
            <p className="mb-6" style={{ color: 'var(--color-taupe)' }}>
              Your bag is empty
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div
                      className="w-24 h-24 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-ivory)' }}
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="product-name text-sm"
                        style={{ color: 'var(--color-espresso)' }}
                      >
                        {item.product.name}
                      </h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-taupe)' }}>
                        {item.variant}
                      </p>
                      <p className="text-sm mt-1 font-medium" style={{ color: 'var(--color-espresso)' }}>
                        {formatPrice(item.product.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div
                          className="flex items-center border"
                          style={{ borderColor: 'var(--color-champagne)' }}
                        >
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="p-2 transition-opacity hover:opacity-60"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" style={{ color: 'var(--color-espresso)' }} />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="p-2 transition-opacity hover:opacity-60"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" style={{ color: 'var(--color-espresso)' }} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="text-xs underline transition-opacity hover:opacity-60"
                          style={{ color: 'var(--color-taupe)' }}
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
            <div
              className="border-t px-6 py-6"
              style={{ borderColor: 'var(--color-champagne)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                  Subtotal
                </span>
                <span className="font-medium" style={{ color: 'var(--color-espresso)' }}>
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <p className="text-xs mb-4" style={{ color: 'var(--color-taupe)' }}>
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center mt-3 text-sm underline transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-taupe)' }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}