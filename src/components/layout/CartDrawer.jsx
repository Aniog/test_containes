import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const drawerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, setIsOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-velmora-ivory flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold-light">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-black" />
            <span className="font-sans text-xs tracking-widest uppercase text-velmora-black">
              Your Bag {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-stone hover:text-velmora-black transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-serif text-lg text-velmora-stone italic">Your bag is empty</p>
              <p className="font-sans text-xs text-velmora-stone">Add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-velmora-black text-velmora-black px-6 py-2.5 hover:bg-velmora-black hover:text-velmora-ivory transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(item => (
                <li key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-blush flex items-center justify-center">
                      <span className="font-serif text-xs text-velmora-stone italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm tracking-wider uppercase text-velmora-black leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-[11px] text-velmora-stone mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-velmora-stone hover:text-velmora-black transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-gold-light">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-black transition-colors"
                        >
                          <Minus size={11} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs text-velmora-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-black transition-colors"
                        >
                          <Plus size={11} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium text-velmora-black">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-gold-light space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-black">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[11px] text-velmora-stone">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-black text-velmora-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-black text-velmora-black font-sans text-xs tracking-widest uppercase py-3 hover:bg-velmora-black hover:text-velmora-ivory transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
