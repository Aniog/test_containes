import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
  } = useCart();

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
          <h2 className="font-serif text-xl tracking-wide text-velmora-charcoal">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-velmora-taupe mb-4" />
              <p className="text-velmora-text-secondary font-sans mb-6">
                Your bag is empty
              </p>
              <button
                onClick={closeCart}
                className="px-8 py-3 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide hover:bg-velmora-gold-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-velmora-sand last:border-0"
                >
                  <div className="w-24 h-24 bg-velmora-warm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-ultra-wide text-velmora-charcoal mb-1">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-velmora-text-muted font-sans mb-2">
                        {item.variant}
                      </p>
                    )}
                    <p className="text-sm font-sans font-medium text-velmora-charcoal mb-3">
                      ${item.price}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-sans text-velmora-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-velmora-text-muted font-sans hover:text-velmora-gold transition-colors underline"
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
        {items.length > 0 && (
          <div className="border-t border-velmora-sand p-6 bg-velmora-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-velmora-text-secondary">
                Subtotal
              </span>
              <span className="text-lg font-sans font-semibold text-velmora-charcoal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-text-muted font-sans mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full py-4 bg-velmora-gold text-white font-sans font-medium text-sm tracking-wide text-center hover:bg-velmora-gold-dark transition-colors"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full mt-3 py-3 text-sm font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
