import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-serif text-lg text-ink">
              Your Cart {totalItems > 0 && <span className="text-ink-muted text-sm">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-linen" />
              <p className="font-serif text-xl text-ink-muted">Your cart is empty</p>
              <p className="text-xs text-ink-faint tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase text-gold border border-gold px-6 py-2 hover:bg-gold hover:text-obsidian transition-all duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="text-gold-dark text-xs font-serif">✦</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase font-medium text-ink truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-ink-faint mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-ink mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-ink-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-ink-faint hover:text-gold transition-colors self-start mt-1"
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
          <div className="px-6 py-5 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase text-ink-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-ink-faint mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold-light transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
