import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice, cn } from '../../lib/utils';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-white shadow-soft-lg transition-transform duration-300 ease-luxury',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
            <h2 className="font-serif text-lg tracking-wide">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-taupe hover:text-espresso transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-taupe" />
                </div>
                <p className="font-serif text-lg text-espresso mb-2">Your bag is empty</p>
                <p className="text-sm text-taupe mb-8">
                  Discover our collection of fine jewelry pieces.
                </p>
                <Link
                  to="/collection"
                  onClick={closeCart}
                  className="btn-primary"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-linen">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="p-6 flex gap-4 transition-opacity duration-200"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 bg-cream-200 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.1em] text-espresso truncate">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-taupe mt-1">{item.variant}</p>
                      )}
                      <p className="font-sans text-sm text-gold mt-2">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-linen rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-taupe hover:text-espresso underline transition-colors"
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
            <div className="border-t border-linen p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-medium text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn-ghost w-full mt-3"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
