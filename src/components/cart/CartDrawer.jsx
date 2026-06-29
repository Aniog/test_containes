import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalItems, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-velmora-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`absolute top-0 right-0 w-full sm:w-[420px] h-full bg-velmora-bg border-l border-velmora-border flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-[0.06em] text-velmora-text">Your Bag ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-velmora-text-muted mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-text mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-text-muted">Discover pieces you'll love</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Product Image Placeholder */}
                  <div className="w-20 h-20 bg-velmora-surface border border-velmora-border flex-shrink-0 flex items-center justify-center">
                    <span className="text-velmora-gold text-xs font-serif tracking-wider">
                      {item.product.name.split(' ').map(w => w[0]).join('').slice(0,2)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-text truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm text-velmora-gold mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border text-velmora-text-muted hover:border-velmora-gold hover:text-velmora-gold flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-velmora-text w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border text-velmora-text-muted hover:border-velmora-gold hover:text-velmora-gold flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors underline underline-offset-2"
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
        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-text-muted">Subtotal</span>
              <span className="font-serif text-lg text-velmora-text">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-velmora-gold text-velmora-bg text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-xs tracking-[0.1em] uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
