import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/60 z-50 cart-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span
              className="text-sm font-medium tracking-[0.12em] uppercase text-velmora-text"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-muted hover:text-velmora-text transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-velmora-gold/30" />
              <p className="text-sm text-velmora-muted">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-[0.15em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-200 underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 pb-5 border-b border-velmora-gold/10 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-blush flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[10px] text-velmora-muted text-center px-1 leading-tight">
                        {item.product.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-text leading-tight"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                        >
                          {item.product.name}
                        </p>
                        <p className="text-[11px] text-velmora-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-velmora-muted hover:text-velmora-text transition-colors duration-200 flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-gold/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-text hover:bg-velmora-blush transition-colors duration-200"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-velmora-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-text hover:bg-velmora-blush transition-colors duration-200"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium text-velmora-text">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-gold/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.1em] uppercase text-velmora-muted">Subtotal</span>
              <span className="text-base font-medium text-velmora-text">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-velmora-muted text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian py-3.5 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-velmora-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-gold/40 text-velmora-text py-3 text-xs font-medium tracking-[0.12em] uppercase hover:border-velmora-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
