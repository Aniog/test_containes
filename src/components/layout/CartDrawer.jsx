import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 cart-overlay transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light">
          <h2 className="font-serif text-xl font-light tracking-wide text-espresso">
            Your Cart
            {items.length > 0 && (
              <span className="font-sans text-sm text-stone ml-2">({items.length})</span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-light" />
              <p className="font-serif text-xl font-light text-espresso">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs uppercase tracking-[0.12em] text-espresso border border-espresso px-6 py-3 hover:bg-espresso hover:text-ivory transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-stone-light">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Thumbnail — styled placeholder, no stock image needed in cart */}
                  <div className="w-20 h-24 bg-ivory-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gold/30" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-[0.1em] text-espresso leading-tight">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-espresso transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-stone-light px-3 py-1.5">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="text-stone hover:text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="font-sans text-sm text-espresso w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="text-stone hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone-light bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-[0.1em] text-stone">Subtotal</span>
              <span className="font-sans text-lg font-medium text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-ivory font-sans text-xs uppercase tracking-[0.15em] py-4 hover:bg-espresso-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone-light text-espresso font-sans text-xs uppercase tracking-[0.12em] py-3 hover:border-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
