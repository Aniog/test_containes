import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cartItems, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

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
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-200">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-ink-600" />
              <span className="font-sans text-sm font-medium text-ink-800">
                Cart ({totalItems})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-cream-200 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4 text-ink-600" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-cream-300 mb-3" />
                <p className="text-ink-400 text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-xs tracking-widest uppercase font-medium text-gold-600 hover:text-gold-700 border-b border-gold-400/30 pb-0.5 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-4 border-b border-cream-100 last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-cream-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm uppercase tracking-wider text-ink-800 truncate">
                        {item.name}
                      </h4>
                      {item.variant && (
                        <p className="text-xs text-ink-400 mt-0.5">{item.variant}</p>
                      )}
                      <p className="text-sm font-medium text-ink-800 mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center rounded border border-cream-300 hover:bg-cream-200 transition-colors text-ink-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-ink-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center rounded border border-cream-300 hover:bg-cream-200 transition-colors text-ink-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-ink-400 hover:text-blush-500 text-xs transition-colors"
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
          {cartItems.length > 0 && (
            <div className="border-t border-cream-200 px-5 py-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-500">Subtotal</span>
                <span className="font-medium text-ink-800">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-ink-400">Shipping and taxes calculated at checkout</p>
              <button className="w-full py-3 bg-ink-900 text-cream-50 text-xs tracking-widest uppercase font-medium hover:bg-ink-800 transition-colors rounded-none">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 border border-ink-300 text-ink-700 text-xs tracking-widest uppercase font-medium hover:bg-cream-100 transition-colors rounded-none"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}