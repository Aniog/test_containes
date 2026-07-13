import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-drawer transition-transform duration-350 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-ink-faint ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
              <p className="font-serif text-xl font-light text-ink-muted">Your cart is empty</p>
              <p className="font-sans text-sm text-ink-faint">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase font-semibold text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-sand last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sand to-linen flex items-center justify-center">
                      <span className="font-serif text-xs text-ink-faint text-center px-1 leading-tight">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-ink-faint mb-2">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm font-medium text-gold">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-linen transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-obsidian hover:bg-linen transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-ink-faint hover:text-error transition-colors"
                        aria-label="Remove item"
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
          <div className="px-6 py-6 border-t border-sand bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-ink-faint mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-sand text-ink-muted font-sans text-xs tracking-widest uppercase font-medium py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
