import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <h2 className="font-serif text-xl text-obsidian tracking-wide">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 bg-transparent border-none text-pebble hover:text-obsidian"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-linen" />
              <p className="font-serif text-2xl text-stone">Your cart is empty</p>
              <p className="font-sans text-sm text-pebble">
                Discover our curated collection of fine jewelry.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gold text-white px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map((item) => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-linen flex items-center justify-center">
                      <span className="font-serif text-2xl text-gold/40">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          className="font-serif text-sm text-obsidian uppercase tracking-widest leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-pebble mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-0 bg-transparent border-none text-pebble hover:text-obsidian flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-transparent border-none text-stone hover:text-obsidian p-0"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-transparent border-none text-stone hover:text-obsidian p-0"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-sans text-sm font-500 text-obsidian">
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
          <div className="px-6 py-6 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs text-pebble tracking-widest uppercase">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-pebble mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-white py-4 font-sans text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 bg-transparent border border-linen text-stone py-3 font-sans text-xs tracking-widest uppercase hover:border-stone transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
