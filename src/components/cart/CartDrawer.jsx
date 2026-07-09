import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    totalItems,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart();

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

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-charcoal-950/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Cart panel */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[80] w-full sm:w-[420px] bg-cream-50 shadow-elevated transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-charcoal-900" />
            <h2 className="font-serif text-lg text-charcoal-900">Your Cart</h2>
            <span className="text-xs text-charcoal-500 font-sans">({totalItems})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
              <h3 className="font-serif text-xl text-charcoal-900 mb-2">Your cart is empty</h3>
              <p className="text-sm text-charcoal-500 mb-6">
                Looks like you haven't added any jewelry yet.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="product-name text-charcoal-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-charcoal-500 mt-1 capitalize">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-charcoal-900 mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-sans text-charcoal-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-charcoal-400 hover:text-charcoal-900 underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-cream-50 border-t border-charcoal-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="text-lg font-medium text-charcoal-900">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-charcoal-500 mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary py-4">
              Checkout — {formatPrice(subtotal)}
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-charcoal-500 hover:text-charcoal-900 mt-3 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
