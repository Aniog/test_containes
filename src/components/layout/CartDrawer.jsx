import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    cartTotal,
    cartCount,
    isCartOpen,
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
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="overlay"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-[var(--color-ivory)] z-50 flex flex-col animate-slide-in shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-sand)]">
          <h2 className="font-serif text-lg tracking-wide">YOUR CART ({cartCount})</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-16 h-16 text-[var(--color-sand)] mb-4" />
            <p className="text-[var(--color-stone)] mb-6">
              Your cart is empty
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="w-24 h-24 flex-shrink-0 bg-[var(--color-parchment)] overflow-hidden"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="block font-serif text-sm tracking-wide text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-[var(--color-stone)] mt-1">
                      {item.variant === 'gold' ? '18K Gold' : 'Silver'}
                    </p>
                    <p className="font-medium mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-sand)]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-xs text-[var(--color-stone)] hover:text-[var(--color-charcoal)] transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-sand)] px-6 py-6 bg-[var(--color-ivory)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[var(--color-stone)]">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-stone)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                CHECKOUT
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors underline"
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
