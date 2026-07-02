import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn, formatPrice } from '../../lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-obsidian-950 border-l border-obsidian-800/50 flex flex-col animate-slide-in shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-obsidian-800/40">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            <h2 className="font-serif text-xl text-cream-50 tracking-wider">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-obsidian-400 hover:text-cream-100 transition-colors p-1"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-obsidian-600 mb-4" />
              <p className="font-serif text-xl text-cream-200 mb-2">Your bag is empty</p>
              <p className="text-sm text-obsidian-400">Discover something beautiful to fill it.</p>
              <button
                onClick={closeCart}
                className="btn-outline mt-6 text-xs px-6 py-2.5"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-obsidian-800/30">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-5">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-obsidian-900 rounded-sm overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-obsidian-800 to-obsidian-900 flex items-center justify-center">
                      <span className="text-[10px] text-obsidian-500 uppercase tracking-wider">{item.name?.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider text-cream-100 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-obsidian-400 mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium text-gold-400 mt-1">{formatPrice(item.price)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-obsidian-700 rounded-sm flex items-center justify-center text-obsidian-400 hover:text-cream-100 hover:border-obsidian-500 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-cream-200 w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-obsidian-700 rounded-sm flex items-center justify-center text-obsidian-400 hover:text-cream-100 hover:border-obsidian-500 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-obsidian-500 hover:text-cream-100 transition-colors self-start"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-obsidian-800/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-obsidian-300 uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-medium text-cream-50">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-obsidian-500">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-sm py-4">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-obsidian-400 hover:text-gold-400 transition-colors tracking-wider uppercase"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
