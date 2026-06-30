import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-velmora-obsidian/40 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velmora-ivory shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <h2 className="font-serif text-xl font-light text-velmora-obsidian tracking-wide">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-velmora-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-border" />
              <p className="font-serif text-xl font-light text-velmora-muted">Your cart is empty</p>
              <p className="font-sans text-xs text-velmora-subtle tracking-wide">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase font-medium text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
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
          <div className="border-t border-velmora-border px-6 py-6 bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-subtle mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-medium py-4 hover:bg-velmora-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300 py-2"
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
    <div className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-border flex items-center justify-center">
          <span className="font-serif text-xs text-velmora-subtle italic">✦</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-sans text-xs text-velmora-muted mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-subtle hover:text-velmora-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-velmora-border">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="w-8 text-center font-sans text-xs font-medium text-velmora-obsidian">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>

          <span className="font-sans text-sm font-medium text-velmora-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
