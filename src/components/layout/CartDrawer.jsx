import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-stone" />
            <span className="font-sans text-xs uppercase tracking-widest text-espresso">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone/40" />
              <p className="font-serif text-xl text-mink font-light">Your cart is empty</p>
              <p className="text-xs text-stone font-sans">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs uppercase tracking-widest text-espresso border border-espresso px-6 py-2.5 hover:bg-espresso hover:text-ivory transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone/10">
              {items.map((item) => (
                <div key={item.key} className="py-4 flex gap-4">
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl font-light text-stone/60 select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-xs uppercase tracking-product text-espresso leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-stone mt-0.5 font-sans">{item.variant}</p>
                    <p className="text-sm font-medium text-espresso mt-1 font-sans">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-stone hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-sans text-espresso w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-stone hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone/50 hover:text-espresso transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/15 bg-ivory">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-stone font-sans">Subtotal</span>
              <span className="font-serif text-lg text-espresso">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone font-sans mb-4 text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-espresso py-3.5 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs uppercase tracking-widest text-stone font-sans py-2 hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
