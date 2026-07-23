import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
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
    if (open) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-md flex flex-col animate-fade-in"
        style={{ backgroundColor: 'var(--velmora-surface)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid var(--velmora-border)' }}>
          <h2 className="velmora-heading text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:opacity-60 transition-opacity" aria-label="Close cart">
            <X className="w-5 h-5" style={{ color: 'var(--velmora-text)' }} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 mb-4" style={{ color: 'var(--velmora-text-light)' }} />
              <p className="velmora-heading text-lg mb-2" style={{ color: 'var(--velmora-text-muted)' }}>
                Your cart is empty
              </p>
              <p className="text-sm" style={{ color: 'var(--velmora-text-light)' }}>
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.productId}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 flex-shrink-0 rounded overflow-hidden" style={{ backgroundColor: 'var(--velmora-dark-alt)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6" style={{ color: 'var(--velmora-accent-light)', opacity: 0.5 }} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm mb-1 truncate" style={{ color: 'var(--velmora-text)' }}>
                      {item.name}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: 'var(--velmora-text-muted)' }}>
                      {item.variant === 'gold' ? 'Gold' : 'Silver'} Tone
                    </p>
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--velmora-text)' }}>
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border" style={{ borderColor: 'var(--velmora-border)' }}>
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:opacity-60 transition-opacity"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:opacity-60 transition-opacity"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-xs underline hover:opacity-60 transition-opacity"
                        style={{ color: 'var(--velmora-text-muted)' }}
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
        {cart.length > 0 && (
          <div className="px-6 py-5" style={{ borderTop: '1px solid var(--velmora-border)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: 'var(--velmora-text-muted)' }}>Subtotal</span>
              <span className="velmora-heading text-lg" style={{ color: 'var(--velmora-text)' }}>
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs mb-4 text-center" style={{ color: 'var(--velmora-text-light)' }}>
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-accent w-full">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-3 text-xs underline hover:opacity-60 transition-opacity py-2"
              style={{ color: 'var(--velmora-text-muted)' }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
