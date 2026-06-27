import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-200">
          <h2 className="font-serif text-xl text-dark-900 tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-muted hover:text-dark-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warm-300 mb-4" />
              <p className="font-serif text-lg text-dark-700 mb-2">Your cart is empty</p>
              <p className="text-sm text-muted mb-6">Discover our handcrafted collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="inline-block px-6 py-3 bg-dark-900 text-cream text-sm tracking-widest uppercase font-sans hover:bg-dark-700 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-warm-200 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gold-400 font-serif text-xs">VELMORA</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-dark-900 uppercase tracking-wider truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted capitalize mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-warm-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-muted hover:text-dark-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm text-dark-900 font-sans tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-muted hover:text-dark-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-dark-900 tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted hover:text-red-500 transition-colors self-start p-1"
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
          <div className="border-t border-warm-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-dark-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-dark-900 text-cream text-sm tracking-[0.2em] uppercase font-sans hover:bg-dark-700 transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-sm text-muted hover:text-dark-900 tracking-wider uppercase transition-colors font-sans"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
