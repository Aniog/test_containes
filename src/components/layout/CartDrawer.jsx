import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { clsx } from 'clsx';

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();
  const drawerRef = useRef(null);

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when open
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

  // Focus trap
  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 bg-rich-black bg-opacity-50 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={clsx(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-warm-ivory z-50',
          'transform transition-transform duration-300 ease-out',
          'flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-100">
          <h2 className="font-serif text-xl text-warm-gray-900">
            Your Bag ({cartCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-warm-gray-600 hover:text-warm-gray-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-warm-gray-200 mb-4" strokeWidth={1} />
              <p className="text-warm-gray-600 mb-6">Your bag is empty</p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-warm-gray-100">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-24 bg-warm-gray-100 flex-shrink-0">
                      <div className="w-full h-full bg-rich-black bg-opacity-5 flex items-center justify-center">
                        <span className="text-champagne text-xs font-medium">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-warm-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-warm-gray-600 capitalize">
                        {item.variant} · Qty: {item.quantity}
                      </p>
                      <p className="mt-1 text-sm font-medium text-warm-gray-900">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-gray-100">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-warm-gray-600 hover:text-warm-gray-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-warm-gray-600 hover:text-warm-gray-900"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-warm-gray-400 hover:text-warm-gray-900 underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-warm-gray-100 px-6 py-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray-600">Subtotal</span>
              <span className="text-lg font-medium text-warm-gray-900">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-warm-gray-400">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout button */}
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full btn-primary text-center"
            >
              Checkout
            </Link>

            {/* Continue shopping */}
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center text-sm text-warm-gray-600 hover:text-champagne transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
