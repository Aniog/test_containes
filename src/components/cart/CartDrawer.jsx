import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

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
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  const getVariantColor = (variant) => {
    return variant === 'gold' ? '#C8A04D' : '#C0C0C0';
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal-900/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-[70] transform transition-transform duration-500 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
            <h2 className="font-serif text-xl tracking-[0.1em] text-charcoal-800">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-charcoal-500 hover:text-charcoal-800 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-charcoal-200 mb-4" />
                <p className="font-serif text-lg text-charcoal-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-charcoal-400">
                  Discover our collection of fine jewelry
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-outline mt-6"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 animate-fade-in">
                    {/* Product image placeholder */}
                    <div className="w-24 h-24 bg-charcoal-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: getVariantColor(item.variant) + '40' }}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center"
                          style={{ backgroundColor: getVariantColor(item.variant) }}
                        >
                          <span className="text-cream-50 text-xs font-sans">
                            {item.product.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-base uppercase tracking-[0.15em] text-charcoal-800 truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-charcoal-400 mt-1 capitalize">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-charcoal-400 hover:text-charcoal-800 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium text-charcoal-800 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-charcoal-400 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-charcoal-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-charcoal-500">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal-400">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs tracking-[0.15em] uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors py-2"
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
