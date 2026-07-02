import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-serif text-lg text-obsidian">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-muted ml-2">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-sand" />
              <p className="font-serif text-xl text-obsidian">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase font-medium text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Continue Shopping
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
          <div className="border-t border-sand px-6 py-5 bg-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-muted">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-sans text-xs tracking-widest uppercase font-medium py-4 hover:bg-gold-dark transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs tracking-widest uppercase font-medium text-stone py-2 hover:text-gold transition-colors"
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
    <div className="flex gap-4 py-4 border-b border-sand last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[cart-item-${product.id}-name] gold jewelry`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="80"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span id={`cart-item-${product.id}-name`} className="sr-only">{product.name}</span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight mb-0.5">
          {product.name}
        </p>
        <p className="font-sans text-xs text-muted mb-2">{variant}</p>
        <p className="font-sans text-sm font-medium text-obsidian">${product.price}</p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-sand">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="px-2 py-1 text-stone hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="px-3 font-sans text-xs text-obsidian min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="px-2 py-1 text-stone hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>
          <button
            onClick={onRemove}
            className="text-whisper hover:text-stone transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
