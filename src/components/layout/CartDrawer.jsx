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
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-muted mb-6">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-6 py-3 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-surface flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-muted text-center px-1">
                      {item.product.name}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs uppercase tracking-product font-sans font-medium text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted hover:text-charcoal transition-colors self-start"
                    aria-label="Remove item"
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
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold text-white text-sm tracking-wider uppercase font-medium hover:bg-gold-light transition-colors">
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
