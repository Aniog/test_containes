import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-[−8px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg font-medium tracking-wide text-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-muted ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-ghost" />
              <p className="font-cormorant text-xl text-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-ghost">Discover our collection and add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs font-semibold tracking-[0.12em] uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-divider">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-divider flex items-center justify-center">
                      <span className="font-cormorant text-xs text-muted italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-ink leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-manrope text-[11px] text-muted mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-manrope text-sm font-medium text-ink mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-[11px] text-ghost hover:text-ink underline underline-offset-2 transition-colors"
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
          <div className="border-t border-divider px-6 py-5 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs text-muted uppercase tracking-wide">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[11px] text-ghost mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-cream font-manrope text-xs font-semibold tracking-[0.12em] uppercase py-4 hover:bg-charcoal transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-divider text-ink font-manrope text-xs font-medium tracking-[0.1em] uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
