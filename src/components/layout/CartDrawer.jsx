import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 z-50 bg-parchment flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-cormorant text-lg tracking-[0.1em] uppercase text-obsidian">
              Your Cart
            </span>
            {items.length > 0 && (
              <span className="font-manrope text-xs text-ink-muted">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-sand" />
              <p className="font-cormorant text-xl text-ink-muted italic">
                Your cart is empty
              </p>
              <p className="font-manrope text-xs text-ink-muted tracking-wide">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-[0.15em] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CartItem
                  key={item.key}
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
          <div className="border-t border-sand px-6 py-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-ink-muted">
                Subtotal
              </span>
              <span className="font-cormorant text-xl text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-[11px] text-ink-muted text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-cream font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-sand text-ink-muted font-manrope text-xs tracking-[0.15em] uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
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
  const { product, variant, quantity, key } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-sand/60 last:border-0">
      {/* Product thumbnail */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
        <span className="font-cormorant text-[10px] tracking-widest text-ink-muted uppercase text-center px-1 leading-tight">
          {product.name.split(' ').slice(0, 2).join('\n')}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-[11px] text-ink-muted mt-0.5 capitalize">
              {variant} tone
            </p>
          </div>
          <button
            onClick={() => onRemove(key)}
            className="text-ink-muted hover:text-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-sand">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-obsidian">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-manrope text-sm font-medium text-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
