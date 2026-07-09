import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, isOpen, setIsOpen } = useCart();
  const itemsRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Load images whenever drawer opens or items change
  useEffect(() => {
    if (!isOpen || !itemsRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, itemsRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-ivory shadow-2xl shadow-espresso/20 flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-espresso">
              Your Bag ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-espresso transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div ref={itemsRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone/40" />
              <p className="font-serif text-xl text-espresso/60">Your bag is empty</p>
              <p className="font-sans text-xs text-stone">Add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone/10 last:border-0">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-thumb-${item.key}`}
                      data-strk-img={`[cart-name-${item.key}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-name-${item.key}`}
                      className="font-serif text-sm uppercase tracking-[0.1em] text-espresso leading-tight mb-1"
                    >
                      {item.product.name}
                    </p>
                    <p className="font-sans text-[11px] text-stone capitalize mb-3">
                      {item.variant} tone
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-stone/20">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs text-espresso">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-espresso">
                          {formatPrice(item.product.price * item.qty)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove item"
                          className="text-stone/50 hover:text-espresso transition-colors"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/15 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs uppercase tracking-[0.12em] text-stone">Subtotal</span>
              <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-sans text-[11px] text-stone/70 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-ivory font-sans text-xs uppercase tracking-[0.15em] py-4 hover:bg-charcoal transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone/30 text-espresso font-sans text-xs uppercase tracking-[0.12em] py-3 hover:border-espresso transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
