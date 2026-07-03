import { Fragment } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeCart} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-soft-lg flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-ink/10">
          <h2 className="font-serif text-xl tracking-wide text-ink">Your Cart</h2>
          <button onClick={closeCart} className="p-2 -mr-2 text-ink/70 hover:text-ink" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-10 w-10 text-ink/30 mb-4" />
              <p className="text-sm text-ink/60">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 bg-surface-alt rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.images?.[0]} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-ink truncate">{item.name}</p>
                        <p className="text-xs text-ink/60 mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-ink/40 hover:text-ink" aria-label="Remove">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-ink/10 rounded-full px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 text-ink/70 hover:text-ink" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 text-ink/70 hover:text-ink" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-ink/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-ink/70">Subtotal</span>
              <span className="text-sm font-medium text-ink">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-full bg-gold text-base py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button onClick={clearCart} className="w-full mt-3 text-xs text-ink/60 hover:text-ink underline underline-offset-4">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
