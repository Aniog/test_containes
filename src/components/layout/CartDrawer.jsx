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
          className="fixed inset-0 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-ink font-medium">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-ink transition-colors"
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
              <p className="font-sans text-sm text-ink-faint">
                Discover our curated collection of fine jewelry.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="text-gold-dark text-xs font-serif italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-sans text-sm font-medium text-ink mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-ink-faint hover:text-ink transition-colors ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-ink-faint mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-linen text-ink-muted font-sans text-xs tracking-widest uppercase py-3 hover:border-ink-muted hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
