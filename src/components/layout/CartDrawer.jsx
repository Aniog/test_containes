import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
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

  if (!isCartOpen) return null;

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();
  const freeShippingThreshold = 75;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--color-cream)] z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-sand)]">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 hover:text-[var(--color-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cartCount > 0 && (
          <div className="px-6 py-4 bg-[var(--color-ivory)]">
            {amountUntilFreeShipping > 0 ? (
              <p className="text-sm text-center text-[var(--color-warm-gray)]">
                Add <span className="font-medium text-[var(--color-charcoal)]">${amountUntilFreeShipping.toFixed(2)}</span> more for free shipping
              </p>
            ) : (
              <p className="text-sm text-center text-[var(--color-gold)] font-medium">
                You&apos;ve unlocked free shipping!
              </p>
            )}
            <div className="mt-2 h-1 bg-[var(--color-sand)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-gold)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-[var(--color-sand)] mb-4" />
              <p className="font-serif text-lg text-[var(--color-charcoal)] mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-[var(--color-warm-gray)] mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--color-sand)]">
              {cart.map((item) => (
                <li key={`${item.product.id}-${item.variant}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-[var(--color-ivory)] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="product-name text-[var(--color-charcoal)]">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="p-1 -mr-1 text-[var(--color-taupe)] hover:text-[var(--color-charcoal)] transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs text-[var(--color-warm-gray)] mb-2">
                        {item.variant} · {item.product.material}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[var(--color-sand)] rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 hover:bg-[var(--color-ivory)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 hover:bg-[var(--color-ivory)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-[var(--color-charcoal)]">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartCount > 0 && (
          <div className="border-t border-[var(--color-sand)] p-6 bg-[var(--color-cream)]">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--color-warm-gray)]">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
            </div>

            <p className="text-xs text-[var(--color-taupe)] mb-4">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="btn btn-primary w-full mb-3">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn btn-secondary w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
