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
        className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-[−8px_0_40px_rgba(0,0,0,0.15)] animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-stone text-sm font-sans">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-gold/40" />
              <p className="font-serif text-xl font-light text-obsidian/60">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-gold text-gold text-xs uppercase tracking-[0.1em] font-medium px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-gold/10 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-blush/30 flex items-center justify-center">
                      <span className="text-gold/40 text-xs font-sans uppercase tracking-wider">
                        {item.product.category.slice(0, 3)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-[0.1em] text-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-gold/20">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian hover:bg-cream transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian hover:bg-cream transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium text-obsidian">
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
          <div className="px-6 py-6 border-t border-gold/15 bg-cream/50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-[0.1em] text-stone">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs uppercase tracking-[0.12em] font-semibold py-4 hover:bg-gold-light transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-gold/30 text-obsidian/70 font-sans text-xs uppercase tracking-[0.1em] py-3 hover:border-gold hover:text-obsidian transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
