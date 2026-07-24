import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Category → accent colour mapping for the cart thumbnail swatch
const CATEGORY_COLORS = {
  earrings: '#C9A96E',
  necklaces: '#A8854A',
  huggies: '#E2C98A',
  sets: '#9E9189',
};

const CartItem = ({ item, onRemove, onUpdateQty }) => {
  const initial = item.name ? item.name.charAt(0).toUpperCase() : '✦';
  const accentColor = CATEGORY_COLORS[item.category] || '#C9A96E';

  return (
    <div className="flex gap-4 py-5 border-b border-divider">
      {/* Styled placeholder thumbnail — no dynamic stock-image ID needed */}
      <div
        className="w-20 h-24 flex-shrink-0 flex items-center justify-center"
        style={{ backgroundColor: '#EDE8E1' }}
      >
        <span
          className="font-serif text-2xl select-none"
          style={{ color: accentColor }}
        >
          {initial}
        </span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
              {item.name}
            </p>
            <p className="font-sans text-xs text-muted mt-0.5">{item.variant}</p>
          </div>
          <button
            onClick={() => onRemove(item.id, item.variant)}
            className="text-whisper hover:text-ink transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-divider">
            <button
              onClick={() => onUpdateQty(item.id, item.variant, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={11} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-ink">{item.quantity}</span>
            <button
              onClick={() => onUpdateQty(item.id, item.variant, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={11} />
            </button>
          </div>

          <span className="font-sans text-sm font-500 text-ink">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-serif text-lg tracking-wide text-ink">
              Your Cart
              {itemCount > 0 && (
                <span className="font-sans text-xs text-muted ml-2 font-400 tracking-normal">
                  ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <div>
                <p className="font-serif text-xl text-ink mb-1">Your cart is empty</p>
                <p className="font-sans text-sm text-muted">Discover pieces crafted to be treasured.</p>
              </div>
              <button
                onClick={closeCart}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-cream transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div>
              {items.map(item => (
                <CartItem
                  key={`${item.id}-${item.variant}`}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQty={updateQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-divider bg-cream">
            {/* Free shipping note */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs text-muted tracking-wide">Free worldwide shipping</span>
              <span className="font-sans text-xs text-gold tracking-wide">✓ Included</span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-sans text-sm text-muted uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-gold text-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight size={14} />
            </button>

            <button
              onClick={closeCart}
              className="w-full mt-3 font-sans text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
