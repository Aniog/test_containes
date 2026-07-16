import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-[-4px_0_32px_rgba(26,23,20,0.12)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg font-medium text-ink tracking-wide">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-xl text-ink-muted font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-ink-faint">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline mt-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full shimmer-gold" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-sm leading-tight mb-1">{item.product.name}</p>
                    <p className="font-manrope text-xs text-ink-faint mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-xs w-4 text-center text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-cormorant text-base font-medium text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-ink-faint hover:text-ink transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs text-ink-muted uppercase tracking-widest">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-ink-faint mb-5">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-manrope text-xs text-ink-muted hover:text-ink transition-colors mt-3 py-2 tracking-widest uppercase"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
