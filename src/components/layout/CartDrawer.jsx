import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide text-velmora-ink">Your Bag</h2>
          <button onClick={closeCart} className="text-velmora-muted hover:text-velmora-ink transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-muted">
              <p className="font-serif text-lg mb-2">Your bag is empty</p>
              <p className="text-sm">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 flex-shrink-0 bg-velmora-warm flex items-center justify-center">
                    <span className="font-serif text-xs uppercase tracking-ultra-wide text-velmora-muted text-center px-1 leading-tight">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-velmora-ink truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-velmora-ink mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-velmora-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-velmora-muted hover:text-velmora-ink underline transition-colors"
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
          <div className="border-t border-velmora-border px-6 py-5">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-sans text-velmora-muted">Subtotal</span>
              <span className="text-sm font-sans font-semibold text-velmora-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-white font-sans text-xs uppercase tracking-wide py-3.5 hover:bg-velmora-gold-dark transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
