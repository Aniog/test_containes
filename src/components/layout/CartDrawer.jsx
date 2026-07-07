import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl shadow-obsidian/20"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-serif text-lg font-light tracking-wide text-ink">
              Your Cart
            </h2>
            {items.length > 0 && (
              <span className="text-xs font-sans text-muted ml-1">
                ({items.length} {items.length === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors p-1"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-parchment" />
              <p className="font-serif text-xl font-light text-ink">Your cart is empty</p>
              <p className="text-xs font-sans text-muted">
                Discover our curated collection of fine jewelry.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs uppercase tracking-widest font-sans text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-parchment">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-item-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          id={`cart-item-${item.key}-name`}
                          className="font-serif text-sm uppercase tracking-widest text-ink leading-tight"
                        >
                          {item.name}
                        </p>
                        <p className="text-xs font-sans text-muted mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-whisper hover:text-ink transition-colors flex-shrink-0"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-parchment">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="font-sans text-sm font-medium text-ink">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-parchment px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest font-sans text-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-whisper text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-ivory py-4 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-parchment text-muted py-3 text-xs uppercase tracking-widest font-sans hover:border-ink hover:text-ink transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
