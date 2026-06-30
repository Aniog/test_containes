import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    itemCount,
    subtotal,
    removeItem,
    updateQuantity,
  } = useCart();

  // Prevent body scroll when drawer is open
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
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-warm-900/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-cream-50 z-50 shadow-medium flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-pearl">
          <h2 className="font-serif text-xl text-warm-800">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-warm-600 hover:text-warm-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center mb-4">
              <ShoppingBag size={32} strokeWidth={1} className="text-warm-400" />
            </div>
            <h3 className="font-serif text-lg text-warm-800 mb-2">
              Your bag is empty
            </h3>
            <p className="text-warm-600 text-sm mb-6">
              Discover our collection of timeless demi-fine jewelry.
            </p>
            <Button onClick={closeCart} variant="primary" size="md">
              <Link to="/shop" onClick={closeCart}>
                Start Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="w-24 h-24 flex-shrink-0 bg-cream-100 overflow-hidden"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.id}`}
                        onClick={closeCart}
                        className="block"
                      >
                        <h4 className="product-name text-xs truncate hover:text-gold-600 transition-colors">
                          {item.product.name}
                        </h4>
                      </Link>
                      <p className="text-warm-600 text-sm mt-1">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-pearl">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-warm-600 hover:text-warm-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
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
                            className="p-2 text-warm-600 hover:text-warm-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={1.5} />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.variant)
                          }
                          className="text-xs text-warm-500 hover:text-dusty transition-colors underline"
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
            <div className="border-t border-pearl px-6 py-6 space-y-4 bg-cream-50">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-warm-600">Subtotal</span>
                <span className="font-serif text-lg text-warm-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="text-xs text-warm-500">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Checkout Button */}
              <Button
                variant="primary"
                size="full"
                className="py-4"
              >
                Proceed to Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-warm-600 hover:text-warm-900 transition-colors underline"
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
