import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/60 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col animate-slideInRight shadow-[-8px_0_40px_rgba(0,0,0,0.25)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-velmora-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-velmora-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-mist font-sans">({totalItems} items)</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-mist hover:text-velmora-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-velmora-sand" />
              <p className="font-serif text-xl font-light text-velmora-ink">Your cart is empty</p>
              <p className="text-sm text-velmora-mist font-sans">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase font-medium text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-velmora-stone/15">
              {items.map((item) => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-sand/40 to-velmora-gold/20 flex items-center justify-center">
                      <span className="text-velmora-gold/40 text-2xl font-serif">V</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-[0.12em] uppercase font-medium text-velmora-ink font-serif truncate">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-velmora-mist mt-0.5 font-sans">{item.variant}</p>
                    )}
                    <p className="text-sm font-semibold text-velmora-ink mt-1 font-sans">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-stone/40 flex items-center justify-center text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm font-medium text-velmora-ink w-4 text-center font-sans">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-stone/40 flex items-center justify-center text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-velmora-sand hover:text-velmora-gold transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-stone/20 bg-velmora-cream/50">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase text-velmora-mist font-sans">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-mist mb-4 font-sans">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian py-3.5 text-xs tracking-widest uppercase font-medium font-sans hover:bg-velmora-gold-light transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-stone/40 text-velmora-mist py-3 text-xs tracking-widest uppercase font-medium font-sans hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
