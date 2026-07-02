import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();

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
      {/* Overlay */}
      <div
        className="drawer-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-50 shadow-drawer flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-[11px] tracking-widest uppercase text-ink font-medium">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-muted font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-ghost tracking-wide">Discover our collection and add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-[11px] tracking-widest uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-espresso transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[${item.product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium leading-tight">
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="font-sans text-[10px] text-muted mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-ghost hover:text-ink transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Qty controls */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQty(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-sans text-sm text-ink font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-[11px] tracking-widest uppercase text-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[10px] text-ghost tracking-wide">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-warm-white font-sans text-[11px] tracking-widest uppercase py-4 hover:bg-charcoal transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink font-sans text-[11px] tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
