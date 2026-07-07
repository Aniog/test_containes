import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();
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
        closeCart();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] z-[70] bg-ivory shadow-2xl transition-transform duration-400 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal" />
              <h2 className="font-serif text-lg tracking-[0.06em] text-charcoal">
                Your Cart
              </h2>
              <span className="text-xs text-charcoal/40 font-sans">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-charcoal/20 mb-4" />
                <p className="font-serif text-lg text-charcoal/60 mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-charcoal/40 mb-6">
                  Discover our handcrafted jewelry collection
                </p>
                <button onClick={closeCart} className="btn-outline text-xs px-6 py-2.5">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-ivory-dark/50 last:border-0"
                  >
                    <div className="w-20 h-20 bg-ivory-warm flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm mb-0.5 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-charcoal/40 font-sans mb-2">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-ivory-dark text-charcoal/60 hover:border-charcoal hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-sans text-charcoal w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-ivory-dark text-charcoal/60 hover:border-charcoal hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-sans font-medium text-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="self-start p-1 text-charcoal/30 hover:text-charcoal transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-ivory-dark px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-charcoal/60">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-charcoal/40 font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs uppercase tracking-[0.1em] text-charcoal/50 hover:text-charcoal transition-colors py-2"
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
