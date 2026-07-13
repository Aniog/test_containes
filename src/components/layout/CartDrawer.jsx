import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, count, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg text-obsidian">
              Your Cart {count > 0 && <span className="text-muted font-sans text-sm font-normal">({count})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-muted">Your cart is empty</p>
              <p className="text-xs text-whisper font-sans tracking-wide">Discover our collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-gold text-cream text-xs tracking-widest uppercase font-sans font-semibold hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 flex items-center justify-center">
                    <span className="text-whisper text-xs font-sans">✦</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted font-sans mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-whisper hover:text-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <p className="font-sans text-sm font-medium text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted font-sans tracking-wider uppercase">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-whisper font-sans mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream py-4 text-xs tracking-widest uppercase font-sans font-semibold hover:bg-gold-dark transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 py-3 text-xs tracking-widest uppercase font-sans text-muted hover:text-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
