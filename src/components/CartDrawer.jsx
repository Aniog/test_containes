import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
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
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <>
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-100 z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-ink" />
              <span className="font-sans text-sm font-medium text-ink">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
              <X className="w-5 h-5 text-ink" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe-300 mb-4" />
                <p className="text-taupe-500 font-sans text-sm">Your cart is empty</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-4 border-b border-cream-200">
                    <div className="w-20 h-20 bg-cream-200 flex-shrink-0 rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-ink mb-0.5">{item.name}</h4>
                      {item.variant && (
                        <p className="text-xs text-taupe-500 font-sans capitalize mb-1">{item.variant} tone</p>
                      )}
                      <p className="text-sm font-sans font-medium text-ink">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-cream-400 rounded flex items-center justify-center hover:bg-cream-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-ink" />
                        </button>
                        <span className="text-sm font-sans text-ink w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-cream-400 rounded flex items-center justify-center hover:bg-cream-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-ink" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-taupe-500 hover:text-ink transition-colors font-sans"
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

          {items.length > 0 && (
            <div className="border-t border-cream-300 px-6 py-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-sans text-ink">Subtotal</span>
                <span className="text-lg font-serif text-ink">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe-500 font-sans">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}