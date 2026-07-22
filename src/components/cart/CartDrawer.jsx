import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (open && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [open, items]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-velmora-deep/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div ref={drawerRef} className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-line">
          <h2 className="font-serif text-lg tracking-wide">
            Your Bag ({itemCount})
          </h2>
          <button onClick={onClose} className="p-2 hover:text-velmora-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-muted">
            <ShoppingBag className="w-10 h-10 opacity-30" />
            <p className="text-sm tracking-wide">Your bag is empty</p>
            <button onClick={onClose} className="btn-subtle mt-2">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-sand shrink-0 flex items-center justify-center">
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.imageId}`}
                      data-strk-img="[cart-item-name]"
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <span id="cart-item-name" className="hidden">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-velmora-deep">{item.name}</p>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-line flex items-center justify-center hover:border-velmora-deep transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-line flex items-center justify-center hover:border-velmora-deep transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-muted hover:text-red-500 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-line px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="block w-full text-center text-xs text-velmora-muted hover:text-velmora-deep transition-colors underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
