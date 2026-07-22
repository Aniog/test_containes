import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <h2 className="font-serif text-lg font-light tracking-[0.1em] text-obsidian">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-stone ml-2">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-obsidian transition-colors duration-200"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gold/40" />
              <p className="font-serif text-xl font-light text-obsidian">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-gold/10 last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold/10 to-gold/20 flex items-center justify-center">
                      <span className="font-serif text-gold/40 text-xs text-center px-1 leading-tight">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-stone mb-1">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-obsidian mb-3">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-gold/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-stone/50 hover:text-red-400 transition-colors duration-200"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gold/20 bg-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-xs uppercase tracking-[0.1em] text-stone">Subtotal</span>
              <span className="font-serif text-lg font-light text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/60 mb-5">Shipping & taxes calculated at checkout</p>

            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-obsidian text-parchment text-center font-sans text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold hover:text-obsidian transition-all duration-300 mb-3"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-center font-sans text-xs uppercase tracking-[0.12em] text-stone hover:text-obsidian transition-colors duration-200 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
