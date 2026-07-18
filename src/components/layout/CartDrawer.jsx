import { useEffect, useRef } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, useCartDispatch, useCartTotal } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const total = useCartTotal();
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);

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

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E3D9]">
          <h2 className="font-serif text-lg tracking-wider">
            YOUR BAG ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-[#78716C] hover:text-[#252320] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-sm text-[#78716C] mb-6">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-outline text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={onClose}
                    className="w-20 h-20 flex-shrink-0 bg-[#F5EDDA] rounded-sm overflow-hidden flex items-center justify-center"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#D4B87A]">
                      <path d="M16 4C12 4 4 6 4 16C4 22 8 26 16 28C24 26 28 22 28 16C28 6 20 4 16 4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p
                          id={`cart-name-${item.product.id}`}
                          className="product-name text-xs truncate"
                        >
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-[#78716C] mt-0.5">
                          {item.variant} Tone
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_ITEM',
                            payload: { key: item.key },
                          })
                        }
                        className="p-0.5 text-[#D4D4D4] hover:text-red-400 transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Quantity + price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E3D9] rounded-sm">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                key: item.key,
                                quantity: item.quantity - 1,
                              },
                            })
                          }
                          className="p-1.5 text-[#78716C] hover:text-[#252320] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                key: item.key,
                                quantity: item.quantity + 1,
                              },
                            })
                          }
                          className="p-1.5 text-[#78716C] hover:text-[#252320] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium tracking-wide">
                        ${(item.product.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#E8E3D9] px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-wider uppercase text-[#78716C]">
                Subtotal
              </span>
              <span className="font-serif text-lg tracking-wide">
                ${total.toFixed(0)}
              </span>
            </div>
            <p className="text-[11px] text-[#A8A39C]">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              className="btn-primary w-full text-xs tracking-widest"
              onClick={() => alert('Checkout coming soon!')}
            >
              Checkout — ${total.toFixed(0)}
            </button>
            <button
              onClick={onClose}
              className="btn-ghost w-full text-xs tracking-wider text-[#78716C]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
