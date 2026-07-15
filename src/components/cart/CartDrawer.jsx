import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-taupe mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="text-gold text-xs tracking-widest uppercase border-b border-gold pb-1 hover:text-gold-hover transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-cream-dark flex-shrink-0">
                    <div className="w-full h-full bg-border/30" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-xs tracking-widest uppercase text-charcoal mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe mb-3">{item.variant}</p>
                    <p className="text-sm text-charcoal font-medium mb-3">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-taupe hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="border-t border-border px-6 py-5">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-charcoal">Subtotal</span>
              <span className="text-sm font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-hover text-cream text-xs tracking-widest uppercase py-4 transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs tracking-widest uppercase text-taupe hover:text-charcoal py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
