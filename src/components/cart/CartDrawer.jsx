import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();
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
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-obsidian/40 cart-overlay animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory flex flex-col animate-slide-in-right shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-obsidian" />
            <h2 className="font-sans text-xs tracking-widest uppercase text-obsidian">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-taupe hover:text-obsidian transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl font-light text-obsidian">Your cart is empty</p>
              <p className="font-sans text-xs text-taupe">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-gold text-gold font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs tracking-widest uppercase text-taupe">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe-light">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-divider text-taupe font-sans text-xs tracking-widest uppercase py-3 hover:border-obsidian hover:text-obsidian transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4">
      {/* Image placeholder */}
      <div className="w-20 h-24 bg-ivory-dark flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}`}
          data-strk-img={`[${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span id={product.titleId} className="sr-only">{product.name}</span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium leading-tight">
              {product.name}
            </p>
            <p className="font-sans text-xs text-taupe mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            aria-label="Remove item"
            className="text-taupe-light hover:text-obsidian transition-colors flex-shrink-0"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-divider">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-obsidian">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>

          <span className="font-sans text-sm font-medium text-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
