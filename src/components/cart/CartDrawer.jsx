import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, total } = useCart();

  if (!drawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-brand-charcoal/40 z-50 cart-overlay-animate"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-ivory z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-extra-wide uppercase text-brand-charcoal">
            Your Bag
          </h2>
          <button
            onClick={closeDrawer}
            className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-sm tracking-super-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-warm flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs tracking-extra-wide uppercase text-brand-muted text-center px-2">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-extra-wide uppercase text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5">{item.tone}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm tracking-extra-wide uppercase text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-brand-ivory py-3 font-sans text-xs tracking-super-wide uppercase font-medium hover:bg-brand-gold-light transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
