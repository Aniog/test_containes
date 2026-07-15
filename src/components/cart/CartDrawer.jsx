import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-400 ${
          open ? 'bg-black/30 pointer-events-auto' : 'bg-transparent pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-muted">
          <h2 className="font-serif text-lg tracking-wider">
            Your Bag {itemCount > 0 && `(${itemCount})`}
          </h2>
          <button onClick={onClose} className="p-1.5 hover:text-velmora-accent transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="body-text mb-2">Your bag is empty.</p>
              <p className="caption">Discover pieces crafted to be treasured.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-muted">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-muted flex-shrink-0 rounded-sm" />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="product-name text-xs">{item.name}</p>
                        <p className="caption mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 hover:text-red-500 transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-muted rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-muted px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="body-text">Subtotal</span>
              <span className="font-serif text-lg tracking-wide">{formatPrice(subtotal)}</span>
            </div>
            <p className="caption">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout &mdash; {formatPrice(subtotal)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
