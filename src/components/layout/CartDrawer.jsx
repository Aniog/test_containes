import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity
  } = useCart();

  // Prevent body scroll when cart is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[var(--velmora-white)] shadow-2xl transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-gray-200)]">
            <h2 className="font-serif text-xl text-[var(--velmora-charcoal)]">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag
                  size={48}
                  strokeWidth={1}
                  className="text-[var(--velmora-gray-400)] mb-4"
                />
                <p className="text-[var(--velmora-gray-600)] mb-4">
                  Your cart is empty
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-[var(--velmora-gold)] hover:text-[var(--velmora-gold-dark)] underline underline-offset-4 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-[var(--velmora-gray-200)]"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-[var(--velmora-cream)] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-[var(--velmora-charcoal)] mb-1 truncate">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-sm text-[var(--velmora-gray-600)] mb-2">
                          {item.variant}
                        </p>
                      )}
                      <p className="text-[var(--velmora-gold)] font-medium mb-3">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-[var(--velmora-gray-200)] rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-sm text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] underline underline-offset-4 transition-colors"
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
          {cart.length > 0 && (
            <div className="border-t border-[var(--velmora-gray-200)] p-6 bg-[var(--velmora-white)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[var(--velmora-gray-600)]">Subtotal</span>
                <span className="text-lg font-medium text-[var(--velmora-charcoal)]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-[var(--velmora-gray-600)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full py-4 bg-[var(--velmora-gold)] text-white font-medium tracking-wider uppercase rounded hover:bg-[var(--velmora-gold-dark)] transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 mt-2 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)] text-sm underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
