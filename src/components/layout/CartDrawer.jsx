import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CATEGORY_COLORS = {
  earrings:  { bg: '#E8DDD0', text: '#8B6F47' },
  necklaces: { bg: '#DDE3D8', text: '#5A6B52' },
  huggies:   { bg: '#E5D9C8', text: '#9B7A4A' },
  sets:      { bg: '#D8D4E0', text: '#6B5F7A' },
};

function CartItemThumb({ product }) {
  const cat = product.category || 'earrings';
  const colors = CATEGORY_COLORS[cat] || CATEGORY_COLORS.earrings;
  const initial = product.name.charAt(0).toUpperCase();
  return (
    <div
      className="w-20 h-20 flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: colors.bg }}
    >
      <span className="font-serif text-2xl" style={{ color: colors.text, fontWeight: 300 }}>
        {initial}
      </span>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col shadow-2xl"
        style={{ animation: 'slide-in-right 0.35s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-serif text-xl tracking-widest uppercase text-obsidian">
            Your Cart
          </h2>
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
              <p className="font-serif text-2xl text-obsidian">Your cart is empty</p>
              <p className="text-sm text-ink-muted font-sans">Discover our collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-obsidian text-parchment text-xs tracking-widest uppercase font-sans font-semibold px-8 py-3 hover:bg-charcoal transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product thumbnail */}
                  <CartItemThumb product={item.product} />

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-ink-muted font-sans mb-2">{item.variant}</p>
                    )}
                    <p className="text-sm font-sans font-medium text-obsidian">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-sans text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-ink-faint hover:text-obsidian transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-widest uppercase font-sans text-ink-muted">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-ink-faint font-sans">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian text-xs tracking-widest uppercase font-sans font-semibold py-4 hover:bg-gold-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink-muted text-xs tracking-widest uppercase font-sans font-medium py-3 hover:border-obsidian hover:text-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
