import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, totalItems, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-fade-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wider text-velmora-text">
            YOUR CART ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-1 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-velmora-text" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-text-muted mb-4" strokeWidth={1} />
            <p className="font-serif text-lg text-velmora-text-muted">Your cart is empty</p>
            <p className="text-sm text-velmora-text-muted mt-1">
              Discover pieces crafted to be treasured.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-cream rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl text-velmora-text-muted/30">
                      {item.displayName?.charAt(0) || 'V'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-wider text-velmora-text truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-velmora-text-muted mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-0.5 hover:opacity-60 transition-opacity ml-2"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4 text-velmora-text-muted" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-velmora-cream rounded-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-velmora-cream rounded-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif text-sm">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-text-muted">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-base text-white font-sans text-sm font-medium tracking-wider uppercase py-3.5 hover:bg-velmora-base-light transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-velmora-border text-velmora-text font-sans text-sm font-medium tracking-wider uppercase py-3.5 hover:bg-velmora-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
