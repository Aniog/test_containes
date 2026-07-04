import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-linen z-50 flex flex-col animate-slideInRight shadow-2xl"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-cormorant text-lg font-medium text-velmora-text-dark tracking-wide">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-velmora-text-muted">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-text-muted hover:text-velmora-text-dark transition-colors duration-200"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-text-mid">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted">
                Discover our collection of fine jewelry
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/20 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-sand flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-velmora-gold">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-wider text-velmora-text-dark font-medium leading-tight">
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-velmora-text-muted hover:text-red-400 transition-colors duration-200 flex-shrink-0"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-sand/50">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-text-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>

                      <span className="font-manrope text-sm font-medium text-velmora-text-dark">
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
          <div className="px-6 py-5 border-t border-velmora-sand/30 bg-velmora-cream/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-manrope text-xs text-velmora-text-muted uppercase tracking-widest">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-text-dark font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-stone/40 text-velmora-text-mid font-manrope text-xs tracking-widest uppercase py-3 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
