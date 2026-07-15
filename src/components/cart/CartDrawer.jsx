import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

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
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-velmora-black/50 backdrop-blur-sm z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-white z-[70] shadow-2xl
          transition-transform duration-400 ease-out flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-light">
          <h2 className="font-serif text-heading-sm text-velmora-charcoal tracking-wide">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-velmora-muted hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag size={48} className="text-velmora-light mb-4" strokeWidth={1} />
              <p className="font-serif text-heading-sm text-velmora-charcoal mb-2">
                Your cart is empty
              </p>
              <p className="text-body-sm text-velmora-muted mb-6">
                Looks like you haven't added any treasures yet.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-0">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-5 border-b border-velmora-light/50 last:border-0"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-velmora-cream rounded flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-velmora-light" />
                    )}
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="product-name text-[13px] text-velmora-charcoal leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-velmora-muted mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-velmora-muted hover:text-velmora-charcoal transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-velmora-light rounded-none">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-body-sm text-velmora-charcoal font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-muted hover:text-velmora-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-body-sm text-velmora-charcoal font-medium">
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
          <div className="border-t border-velmora-light px-6 py-5 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-velmora-muted uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-body text-velmora-charcoal font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <p className="text-[11px] text-velmora-muted">
              Shipping & taxes calculated at checkout
            </p>

            {/* Checkout button */}
            <button className="btn-primary w-full py-4">
              Proceed to Checkout
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-body-sm text-velmora-muted hover:text-velmora-charcoal transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
