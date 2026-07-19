import { Fragment } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-accent" />
            <h2 className="font-serif text-lg font-semibold tracking-wide text-brand-ink">Your Cart</h2>
            <span className="text-xs text-brand-muted">({totalItems})</span>
          </div>
          <button onClick={onClose} className="p-2 text-brand-muted hover:text-brand-ink transition-colors" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle mb-3" />
              <p className="font-serif text-lg text-brand-ink">Your cart is empty</p>
              <p className="mt-1 text-sm text-brand-muted">Discover pieces made to be treasured.</p>
              <button onClick={onClose} className="mt-5 inline-flex items-center justify-center rounded-full border border-brand-ink px-5 py-2.5 text-sm font-medium tracking-wide text-brand-ink hover:bg-brand-ink hover:text-white transition-colors">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-brand-warm">
                    <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium tracking-wide text-brand-ink">{item.name}</p>
                        <p className="mt-0.5 text-xs text-brand-muted capitalize">{item.variant} tone</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-subtle hover:text-brand-ink transition-colors" aria-label="Remove item">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-brand-border">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1.5 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-xs font-medium text-brand-ink">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1.5 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-border px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-brand-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
            <button className="mt-4 w-full rounded-full bg-brand-ink py-3 text-sm font-semibold tracking-wide text-white hover:bg-brand-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
