import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { cart, cartTotal, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();
  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };

    if (isCartOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCartOpen, closeCart]);

  // Focus trap
  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        tabIndex={-1}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out-expo"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center mb-4">
              <ShoppingBag size={24} className="text-stone" />
            </div>
            <p className="text-charcoal/60 mb-6">Your bag is empty</p>
            <Link
              to="/collection"
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-4 border-b border-sand/50 last:border-0"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="w-24 h-24 flex-shrink-0 bg-ivory overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="block"
                    >
                      <h3 className="font-serif text-sm text-charcoal uppercase tracking-wide truncate hover:text-taupe transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    {item.variant && (
                      <p className="text-xs text-taupe mt-0.5 capitalize">
                        {item.variant}
                      </p>
                    )}
                    <p className="text-sm text-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:bg-ivory transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:bg-ivory transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-taupe hover:text-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-5 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-charcoal/80">Subtotal</span>
                <span className="font-medium text-charcoal">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary py-4">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-charcoal/60 hover:text-charcoal underline transition-colors"
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
