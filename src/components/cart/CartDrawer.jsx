import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeDrawer();
    };
    if (isDrawerOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-2xl flex flex-col animate-slide-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={closeDrawer}
            className="p-2 -mr-2 text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-4">
              <ShoppingBag size={24} className="text-taupe" />
            </div>
            <p className="text-warm-gray mb-6">Your bag is empty</p>
            <Link
              to="/collection"
              onClick={closeDrawer}
              className="btn-gold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-ultra-wide uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-gray mt-1">
                        {item.variant && item.variant !== 'default'
                          ? item.variant.charAt(0).toUpperCase() + item.variant.slice(1)
                          : 'Gold'}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-sans text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="p-1 text-taupe hover:text-rose transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-hairline p-6 bg-cream/50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-warm-gray">Subtotal</span>
                <span className="font-sans">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-gold w-full mb-3">
                Checkout
              </button>
              <Link
                to="/collection"
                onClick={closeDrawer}
                className="btn-ghost w-full justify-center"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
