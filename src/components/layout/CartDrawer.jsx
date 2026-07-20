import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-stone-pale">
      {/* Product image placeholder */}
      <div className="w-20 h-20 bg-stone-pale flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-stone-pale to-ivory-dark flex items-center justify-center">
          <span className="text-stone text-xs font-serif italic">
            {item.product.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-xs uppercase tracking-widest text-charcoal leading-tight">
              {item.product.name}
            </p>
            {item.variant && (
              <p className="text-xs text-stone mt-0.5 font-sans">{item.variant}</p>
            )}
          </div>
          <button
            onClick={() => removeItem(item.key)}
            aria-label="Remove item"
            className="text-stone hover:text-charcoal transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex items-center border border-stone-light">
            <button
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-stone-pale transition-colors"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-xs font-sans text-charcoal">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-stone-pale transition-colors"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>

          <p className="font-sans text-sm text-charcoal font-medium">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, subtotal, clearCart } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" strokeWidth={1.5} />
            <h2 className="font-serif text-base uppercase tracking-widest text-charcoal">
              Your Cart
            </h2>
            {items.length > 0 && (
              <span className="text-xs text-stone font-sans">({items.length})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-charcoal transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-stone-light" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal font-light">Your cart is empty</p>
              <p className="text-xs text-stone font-sans">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs uppercase tracking-widest font-sans text-charcoal border border-charcoal px-6 py-2.5 hover:bg-charcoal hover:text-ivory transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div>
              {items.map(item => (
                <CartItem key={item.key} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone-light/50 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest font-sans text-stone">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone font-sans">Shipping & taxes calculated at checkout</p>

            {/* CTA */}
            <button className="w-full bg-charcoal text-ivory text-xs uppercase tracking-widest font-sans py-4 hover:bg-charcoal-light transition-colors duration-300">
              Proceed to Checkout
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs uppercase tracking-widest font-sans text-stone hover:text-charcoal transition-colors duration-300 py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
