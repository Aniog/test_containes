import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
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
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-warm z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-cream-dark">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-charcoal" />
              <span className="font-sans text-sm font-medium text-brand-charcoal">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
              <X className="w-5 h-5 text-brand-charcoal" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-brand-cream-dark mb-4" />
                <p className="font-serif text-lg text-brand-taupe">Your cart is empty</p>
                <p className="font-sans text-sm text-brand-taupe mt-1">Discover pieces you'll love.</p>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.material}`} className="flex gap-4 pb-5 border-b border-brand-cream-dark last:border-0">
                    <div className="w-20 h-20 bg-brand-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-brand-charcoal mb-0.5">{item.name}</h4>
                      <p className="font-sans text-xs text-brand-taupe capitalize mb-2">{item.material} tone</p>
                      <p className="font-sans text-sm font-medium text-brand-charcoal mb-2">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-brand-cream-dark">
                          <button
                            onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                            className="p-1.5 hover:bg-brand-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 font-sans text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                            className="p-1.5 hover:bg-brand-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.material)}
                          className="font-sans text-xs text-brand-taupe hover:text-brand-charcoal transition-colors underline"
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
            <div className="border-t border-brand-cream-dark px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium text-brand-charcoal">Subtotal</span>
                <span className="font-sans text-base font-semibold text-brand-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-brand-taupe">Shipping & taxes calculated at checkout</p>
              <button className="btn-accent w-full text-center block">Checkout</button>
              <button onClick={onClose} className="btn-outline w-full text-center block">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}