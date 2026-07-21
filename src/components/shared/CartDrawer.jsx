import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();
  const drawerRef = useRef(null);

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

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--ivory-cream)] z-50 shadow-[var(--shadow-elevated)] flex flex-col animate-[slideInRight_300ms_ease]"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--light-warm-gray)]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2
              className="text-lg font-medium"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your Cart
            </h2>
            <span className="text-sm text-[var(--soft-gray)]">
              ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[var(--champagne-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[var(--light-warm-gray)] mb-4" />
              <p
                className="text-lg mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Your cart is empty
              </p>
              <p className="text-sm text-[var(--soft-gray)] mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] font-medium text-sm hover:bg-[var(--rose-gold)] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.variant || 'default'}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-[var(--warm-stone)] rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3
                          className="product-name text-sm mb-1"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-[var(--soft-gray)] mb-1">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="p-1 text-[var(--soft-gray)] hover:text-[var(--error)] transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[var(--light-warm-gray)]">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-2 hover:text-[var(--champagne-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-2 hover:text-[var(--champagne-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--light-warm-gray)] p-6 bg-[var(--ivory-cream)]">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-[var(--soft-gray)]">Subtotal</span>
              <span className="font-medium">{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-[var(--soft-gray)]">
                Shipping & taxes calculated at checkout
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full py-4 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] font-medium text-sm hover:bg-[var(--rose-gold)] transition-colors mb-3">
              Proceed to Checkout
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 border border-[var(--champagne-gold)] text-[var(--champagne-gold)] font-medium text-sm hover:bg-[var(--champagne-gold)] hover:text-[var(--deep-espresso)] transition-colors"
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
