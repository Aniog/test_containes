import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-base/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-surface shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl font-light tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagEmpty />
              <p className="font-serif text-lg mt-4">Your cart is empty</p>
              <p className="text-muted text-sm mt-1">Add something beautiful.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-8 py-3 bg-accent text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-base/5 flex-shrink-0 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-sm uppercase tracking-widest font-light truncate block hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-base/5 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-base/5 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          aria-label="Remove item"
                          className="text-muted hover:text-base transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-[0.1em] text-muted">
                Subtotal
              </span>
              <span className="font-serif text-xl font-light">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full py-3.5 bg-accent text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-accent-hover transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 mt-2 border border-base text-base text-xs uppercase tracking-[0.15em] font-medium hover:bg-base hover:text-white transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function ShoppingBagEmpty() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="text-muted"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
