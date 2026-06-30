import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-champagne" />
            <span className="font-cormorant text-lg font-light tracking-widest text-velmora-obsidian uppercase">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-velmora-stone">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-stone hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-blush" />
              <p className="font-cormorant text-xl font-light text-velmora-stone">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-stone/70">Discover our collection and find something beautiful.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-widest border border-velmora-champagne text-velmora-champagne px-6 py-3 hover:bg-velmora-champagne hover:text-velmora-obsidian transition-all duration-300"
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
          <div className="border-t border-velmora-blush px-6 py-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-velmora-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-stone/70 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-champagne text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-blush text-velmora-stone font-manrope text-xs uppercase tracking-widest py-3 hover:border-velmora-stone transition-all duration-300"
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
    <div className="flex gap-4 py-4 border-b border-velmora-blush/50 last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-velmora-blush to-velmora-linen flex items-center justify-center">
          <span className="font-cormorant text-xs text-velmora-stone/50 italic">
            {item.product.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight mb-1">
          {item.product.name}
        </p>
        <p className="font-manrope text-xs text-velmora-stone mb-2">{item.variant}</p>
        <p className="font-manrope text-sm font-medium text-velmora-obsidian">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onUpdateQty(item.quantity - 1)}
            className="w-6 h-6 border border-velmora-blush flex items-center justify-center text-velmora-stone hover:border-velmora-champagne hover:text-velmora-champagne transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="font-manrope text-xs w-4 text-center text-velmora-obsidian">{item.quantity}</span>
          <button
            onClick={() => onUpdateQty(item.quantity + 1)}
            className="w-6 h-6 border border-velmora-blush flex items-center justify-center text-velmora-stone hover:border-velmora-champagne hover:text-velmora-champagne transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3 h-3" />
          </button>
          <button
            onClick={onRemove}
            className="ml-auto font-manrope text-xs text-velmora-stone/60 hover:text-velmora-stone transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
