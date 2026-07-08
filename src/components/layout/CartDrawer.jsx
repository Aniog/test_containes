import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-parchment flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg tracking-wide text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-ink-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-xl text-ink-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-ink-muted">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-[0.12em] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
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
          <div className="border-t border-linen px-6 py-6 bg-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="font-manrope text-xs tracking-wide uppercase text-ink-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-obsidian">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-manrope text-xs text-ink-muted mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-[0.12em] uppercase py-4 hover:bg-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink-muted font-manrope text-xs tracking-[0.12em] uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
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
    <div className="flex gap-4 py-4 border-b border-linen last:border-0">
      {/* Thumbnail */}
      <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
        <span className="font-cormorant text-2xl text-gold/60 select-none">
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <span id={`cart-item-${item.key}-name`} className="sr-only">{product.name} gold jewelry</span>
        <p className="font-cormorant text-sm uppercase tracking-widest text-obsidian leading-tight mb-0.5">
          {product.name}
        </p>
        {variant && (
          <p className="font-manrope text-xs text-ink-muted mb-2">{variant}</p>
        )}
        <p className="font-manrope text-sm font-medium text-obsidian">{formatPrice(product.price)}</p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-linen">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="w-7 text-center font-manrope text-xs text-obsidian">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>
          <button
            onClick={onRemove}
            className="font-manrope text-xs text-ink-muted hover:text-gold transition-colors underline underline-offset-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
