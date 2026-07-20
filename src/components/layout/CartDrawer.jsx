import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import useCartStore from '../../store/cartStore';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCartStore();

  const drawerRef = useRef(null);
  const total = getCartTotal();
  const count = getCartCount();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal-800/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-[440px] bg-ivory-50 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-300">
            <h2 className="font-serif text-xl tracking-wider text-charcoal-800">
              Shopping Bag ({count})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-charcoal-600 hover:text-gold-500 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-600 mb-2">
                  Your bag is empty
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Discover our collection of fine jewelry
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-800 text-white font-sans text-sm tracking-wider uppercase hover:bg-charcoal-700 transition-colors"
                >
                  Shop Now
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-ivory-200 last:border-0"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-ivory-200 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal-800">
                            {item.name}
                          </h3>
                          <p className="text-xs text-charcoal-400 mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 text-charcoal-400 hover:text-charcoal-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-ivory-300">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-2 text-charcoal-600 hover:text-gold-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-charcoal-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-2 text-charcoal-600 hover:text-gold-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-sans text-sm font-medium text-charcoal-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-ivory-300 bg-ivory-100">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-sans text-lg font-medium text-charcoal-800">
                  ${total.toFixed(2)}
                </span>
              </div>

              <p className="text-xs text-charcoal-400 mb-4">
                Shipping & taxes calculated at checkout
              </p>

              {/* Checkout button */}
              <button className="w-full py-4 bg-gold-500 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

              {/* Continue shopping */}
              <button
                onClick={closeCart}
                className="w-full py-3 mt-2 text-sm text-charcoal-600 hover:text-gold-500 transition-colors"
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
