import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream-50 shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-ink" />
              <span className="font-sans text-sm tracking-wider uppercase text-ink">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-ink-border/50 transition-colors rounded-full"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-ink-muted mb-4" />
                <p className="font-serif text-xl text-ink-lighter mb-2">Your cart is empty</p>
                <p className="text-sm text-ink-muted">Add some pieces to get started</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-ink-border last:border-0">
                    {/* Image placeholder */}
                    <div className="w-20 h-24 bg-velvet-100 flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <p className="product-name mb-1">{item.name}</p>
                      <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                        {item.variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                      </p>
                      <p className="font-sans text-sm font-medium text-ink">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-ink-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:bg-velvet-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:bg-velvet-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-ink-muted hover:text-ink underline underline-offset-2 transition-colors"
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
            <div className="px-6 py-5 border-t border-ink-border">
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-sm uppercase tracking-wider text-ink">Subtotal</span>
                <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-ink-muted mb-4">Free worldwide shipping on all orders</p>
              <button className="btn-primary w-full">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}