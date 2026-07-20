import React, { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeCart(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div className="absolute inset-0 bg-charcoal/40" onClick={closeCart} />
      <div
        ref={drawerRef}
        className="relative w-full max-w-md bg-cream h-full shadow-2xl flex flex-col animate-slideInRight"
      >
        <div className="flex items-center justify-between p-5 border-b border-hairline">
          <h2 className="font-serif text-xl font-medium">Your Cart ({items.length})</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5 hover:text-gold transition-colors" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-lg text-muted mb-4">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-block bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-wider hover:bg-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="w-20 h-20 bg-white border border-hairline flex-shrink-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-hairline/50 rounded-full" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-sm uppercase tracking-wider truncate block hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-hairline flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-hairline flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto p-1 text-muted hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-hairline p-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-white py-3.5 text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-charcoal text-charcoal py-3.5 text-sm uppercase tracking-wider hover:bg-charcoal hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
