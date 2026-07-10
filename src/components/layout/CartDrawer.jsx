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
          <h2 className="font-serif text-xl tracking-wide text-charcoal">Your Cart</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-taupe mt-2">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-block bg-gold text-cream px-8 py-3 text-xs uppercase tracking-ultra-wide font-sans font-medium hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-sand flex-shrink-0 flex items-center justify-center border border-border/50">
                    <ShoppingBag className="w-6 h-6 text-gold/60" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xs uppercase tracking-ultra-wide font-sans font-medium text-charcoal">
                          {item.name}
                        </h3>
                        <p className="text-xs text-taupe mt-1 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-taupe hover:text-charcoal transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium text-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal">${(item.price * item.quantity).toFixed(2)}</span>
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
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-cream py-3.5 text-xs uppercase tracking-ultra-wide font-sans font-medium hover:bg-gold-light transition-colors text-center">
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
