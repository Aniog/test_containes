import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-warm-gray hover:text-charcoal transition-colors duration-200 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-warm-gray-light" />
              <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="text-xs text-warm-gray font-sans">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ink transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-warm-gray-light/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-parchment to-warm-gray-light/30 flex items-center justify-center">
                      <span className="text-warm-gray-light text-xs font-sans">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-[0.1em] uppercase text-charcoal leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-warm-gray font-sans mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal font-sans mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-warm-gray-light/50 flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors duration-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-sans text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-warm-gray-light/50 flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors duration-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-gray hover:text-charcoal font-sans transition-colors duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-gray-light/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase text-warm-gray font-sans">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray font-sans mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ink py-4 text-xs tracking-widest uppercase font-medium font-sans hover:bg-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-warm-gray-light/50 text-charcoal py-3 text-xs tracking-widest uppercase font-sans hover:border-charcoal transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
