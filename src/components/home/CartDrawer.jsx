import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <h2 className="font-serif text-xl tracking-wider text-warm-dark">Shopping Bag</h2>
            <button
              onClick={onClose}
              className="p-2 text-warm-gray hover:text-warm-dark transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warm-gray font-sans text-sm mb-6">Your bag is empty.</p>
                <Link
                  to="/collection"
                  onClick={onClose}
                  className="inline-block bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold/90 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={item.key} className="flex gap-4 pb-6 border-b border-warm-border last:border-0">
                    {/* Image */}
                    <div className="w-20 h-24 flex-shrink-0 bg-warm-border/30 rounded overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-sm text-warm-dark uppercase tracking-wide">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-warm-gray mt-0.5 capitalize">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-warm-gray hover:text-red-500 transition-colors p-1 -mt-1 -mr-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-border rounded">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="p-1.5 text-warm-gray hover:text-warm-dark transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm font-sans text-warm-dark min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="p-1.5 text-warm-gray hover:text-warm-dark transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-warm-dark">
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
            <div className="border-t border-warm-border px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-warm-gray uppercase tracking-wide">Total</span>
                <span className="font-serif text-xl text-warm-dark">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-gold text-white py-3.5 text-xs uppercase tracking-widest hover:bg-gold/90 transition-colors"
                onClick={() => alert('Checkout coming soon!')}
              >
                Checkout
              </button>
              <p className="text-center text-[11px] text-warm-gray mt-3">
                Free worldwide shipping on orders over $50
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}