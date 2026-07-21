import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
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

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[var(--color-ivory)] shadow-[var(--shadow-drawer)] animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-divider)]">
          <h2
            className="text-lg font-medium tracking-[0.1em] uppercase text-[var(--color-espresso)]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-[var(--color-mocha)] hover:text-[var(--color-espresso)] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] flex items-center justify-center mb-4">
              <ShoppingBag size={24} className="text-[var(--color-warm-gray)]" />
            </div>
            <p className="text-[var(--color-mocha)] text-center mb-6">
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
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-[var(--color-cream)] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="product-name text-[var(--color-espresso)] truncate"
                    >
                      {item.product.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-[var(--color-warm-gray)] mt-0.5">
                        {item.variant}
                      </p>
                    )}
                    <p className="text-sm text-[var(--color-mocha)] mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center border border-[var(--color-divider)] hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 flex items-center justify-center border border-[var(--color-divider)] hover:border-[var(--color-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.variant)
                        }
                        className="text-xs text-[var(--color-warm-gray)] hover:text-[var(--color-espresso)] transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-divider)] p-6 bg-[var(--color-ivory)]">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[var(--color-mocha)]">Subtotal</span>
                <span className="font-medium text-[var(--color-espresso)]">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[var(--color-warm-gray)] mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-primary w-full mb-3">
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center text-xs uppercase tracking-[0.1em] text-[var(--color-mocha)] hover:text-[var(--color-gold)] transition-colors py-2"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
