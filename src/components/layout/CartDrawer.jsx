import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-ink" />
            <span className="font-serif text-lg font-light text-ink">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-sans text-taupe">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-muted" />
              <p className="font-serif text-xl font-light text-ink">Your cart is empty</p>
              <p className="text-sm text-taupe font-sans">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs uppercase tracking-widest font-medium text-gold hover:text-gold-dark transition-colors border-b border-gold pb-0.5"
              >
                Shop Now
              </button>
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
          <div className="border-t border-border px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-medium text-taupe">Subtotal</span>
              <span className="font-serif text-xl font-light text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe font-sans">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-ink text-cream py-4 text-xs uppercase tracking-widest font-medium hover:bg-obsidian transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-border text-ink py-3 text-xs uppercase tracking-widest font-medium hover:border-ink transition-colors"
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
    <div className="flex gap-4 py-4 border-b border-border last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-2xl">✦</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
              {product.name}
            </p>
            <p className="text-xs text-taupe font-sans mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-muted hover:text-ink transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-border">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-sans text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <span className="font-sans text-sm font-medium text-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
