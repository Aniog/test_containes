import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
          <h2 className="font-serif text-xl font-medium">Your Cart</h2>
          <button onClick={closeCart} className="text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border-subtle mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-2">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 bg-gold text-white px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium hover:bg-gold-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-gold-light rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-border-subtle flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-border-subtle flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
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
          <div className="px-6 py-5 border-t border-border-subtle">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white py-3.5 text-sm uppercase tracking-[0.12em] font-medium hover:bg-gold-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
