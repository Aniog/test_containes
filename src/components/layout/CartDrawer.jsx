import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl flex flex-col slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-ink">
              Your Cart
            </span>
            {items.length > 0 && (
              <span className="font-sans text-xs text-mist ml-1">
                ({items.reduce((s, i) => s + i.quantity, 0)})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-serif text-xl font-light text-mist">Your cart is empty</p>
              <p className="font-sans text-sm text-whisper">
                Discover our curated collection
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-white transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs text-whisper uppercase tracking-wider">
                      {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-[0.1em] text-ink leading-tight">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-mist mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm font-medium text-ink mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-mist hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-ink w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-mist hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-whisper hover:text-ink transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-divider bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-mist">Subtotal</span>
              <span className="font-serif text-xl font-light text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-white font-sans text-xs uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs uppercase tracking-[0.15em] text-mist py-2 hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
