import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream-50 z-50 shadow-elevated animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 text-taupe hover:text-espresso-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-taupe-light mb-4" strokeWidth={1} />
            <p className="text-taupe mb-6">Your cart is empty</p>
            <button
              onClick={closeCart}
              className="px-8 py-3 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-30 bg-cream-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-espresso-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-taupe mt-1">{item.variant}</p>
                      <p className="text-sm text-espresso-900 mt-1">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-taupe hover:text-espresso-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={2} />
                          </button>
                          <span className="px-3 text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-taupe hover:text-espresso-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={2} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-sm text-taupe hover:text-espresso-900 transition-colors underline"
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
            <div className="border-t border-border px-6 py-6 bg-cream-50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-taupe">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe-light mb-6">
                Shipping and taxes calculated at checkout
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors">
                  Checkout
                </button>
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="block w-full py-4 border border-espresso-900 text-espresso-900 text-sm uppercase tracking-wider text-center hover:bg-espresso-900 hover:text-white transition-colors"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
