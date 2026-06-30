import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-ink transition-colors"
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
              <p className="font-serif text-xl text-stone italic">Your cart is empty</p>
              <p className="font-sans text-xs text-mist tracking-wide">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="font-serif text-xs text-mist italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-wider text-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-mist mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-ink mt-1">${item.product.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs text-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-stone hover:text-ink transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={14} strokeWidth={1.5} />
                    </button>
                    <p className="font-sans text-sm font-medium text-ink">
                      ${(item.product.price * item.quantity).toFixed(0)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-mist">Subtotal</span>
              <span className="font-serif text-xl text-ink">${totalPrice.toFixed(0)}</span>
            </div>
            <p className="font-sans text-xs text-mist mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone/30 text-stone font-sans text-xs tracking-widest uppercase py-3 hover:border-ink hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
