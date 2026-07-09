import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/data/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button onClick={closeCart} className="text-muted hover:text-charcoal transition-colors" aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-2">Discover our collection of fine jewelry</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-ivory rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-muted uppercase tracking-wider">Image</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-charcoal uppercase tracking-product truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-muted hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-medium text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-muted hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-muted hover:text-gold underline transition-colors"
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
              <span className="font-serif text-lg text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-dark text-cream py-3.5 text-sm font-medium uppercase tracking-wider transition-colors duration-200">
              Checkout
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
