import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-obsidian/60 cart-overlay transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream flex flex-col transition-transform duration-400 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/60">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-gold" />
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand" />
              <p className="font-serif text-2xl text-velmora-text-dark">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-text-muted">Discover our curated collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-velmora-gold text-velmora-obsidian font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-sand/60 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-velmora-text-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-2xl text-velmora-text-dark">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-velmora-obsidian text-velmora-cream font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-velmora-stone/40 text-velmora-text-dark font-sans text-xs uppercase tracking-widest font-semibold hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4">
      <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-velmora-sand/40 to-velmora-linen flex items-center justify-center">
          <span className="font-serif text-xs text-velmora-text-muted text-center px-1">{product.name}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-serif text-sm uppercase tracking-wider text-velmora-text-dark leading-tight">{product.name}</p>
            <p className="font-sans text-xs text-velmora-text-muted mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-text-muted hover:text-velmora-text-dark transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velmora-sand/60">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-sans text-sm text-velmora-text-dark">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-sans text-sm font-medium text-velmora-text-dark">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
