import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-bg)] shadow-2xl slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--velmora-border)]">
          <h2 className="velmora-heading text-xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:text-[var(--velmora-warm)] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[var(--velmora-text-light)] mb-4" />
              <p className="velmora-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-muted)] mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                className="velmora-btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--velmora-cream)] flex-shrink-0 overflow-hidden rounded-sm">
                    <div className="w-full h-full flex items-center justify-center text-[var(--velmora-warm)]">
                      <ShoppingBag size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="velmora-product-name text-sm">{item.name}</p>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-warm)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-warm)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[var(--velmora-text-light)] hover:text-red-500 transition-colors"
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
          <div className="border-t border-[var(--velmora-border)] px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm">Subtotal</span>
              <span className="velmora-heading text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)] mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="velmora-btn-accent w-full">
              Checkout
            </button>
            <button
              className="velmora-btn-outline w-full mt-3"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
