import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

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
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-drawer animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-text-primary font-medium">
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-text-primary transition-colors"
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
              <p className="font-serif text-xl text-velmora-text-secondary">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-text-muted">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-[0.2em] uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
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
          <div className="border-t border-velmora-sand px-6 py-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-text-muted">Subtotal</span>
              <span className="font-serif text-xl text-velmora-text-primary">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-text-muted text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-[0.2em] uppercase font-semibold py-4 hover:bg-velmora-gold-light transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-stone/40 text-velmora-text-secondary font-sans text-xs tracking-[0.15em] uppercase py-3 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
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
  return (
    <div className="flex gap-4 py-4 border-b border-velmora-sand/60 last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-velmora-sand to-velmora-linen flex items-center justify-center">
          <span className="font-serif text-2xl text-velmora-gold-muted">V</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-text-primary leading-tight">
              {item.name}
            </p>
            <p className="font-sans text-xs text-velmora-text-muted mt-0.5 capitalize">
              {item.variant} tone
            </p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-text-muted hover:text-velmora-text-primary transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-velmora-sand">
            <button
              onClick={() => onUpdateQty(item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-7 text-center font-sans text-xs text-velmora-text-primary">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQty(item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <span className="font-serif text-base text-velmora-text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
