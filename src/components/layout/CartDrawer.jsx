import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../context/CartContext';

/** Resolve a product thumbnail URL directly from the pre-built config. */
function resolveCartThumb(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry) return null;
  const picked = entry.results?.find((r) => r.id === entry.picked);
  return picked?.url ?? entry.results?.[0]?.url ?? null;
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col animate-slideInRight shadow-[-4px_0_24px_rgba(26,23,20,0.12)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-manrope text-xs tracking-widest uppercase text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl text-ink-muted font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-ink-faint">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-5">
                  {/* Product image — resolved directly from config, no data-strk-img */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    {(() => {
                      const thumbUrl = resolveCartThumb(item.product.imgId);
                      return thumbUrl ? (
                        <img
                          src={thumbUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-parchment" />
                      );
                    })()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-manrope text-xs text-ink-faint mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-manrope text-sm text-gold mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-manrope text-xs w-4 text-center text-ink">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-ink-faint hover:text-ink transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-widest uppercase text-ink-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-ink-faint">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-cream font-manrope text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink-muted font-manrope text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
