import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-medium">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted mb-4" />
              <p className="text-muted text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-4 text-sm font-medium text-accent hover:text-accent-hover transition-colors underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border">
                  <div className="w-20 h-20 bg-muted-bg rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted text-center px-1">{item.name}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-medium tracking-product uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-border rounded-sm flex items-center justify-center hover:border-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted hover:text-accent transition-colors"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-accent text-white text-sm font-medium tracking-wide uppercase hover:bg-accent-hover transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 mt-2 text-sm font-medium text-charcoal hover:text-accent transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
