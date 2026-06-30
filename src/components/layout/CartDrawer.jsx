import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-serif text-lg text-obsidian">
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-sans text-text-muted">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-secondary hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-parchment" />
              <p className="font-serif text-xl text-text-secondary italic">Your cart is empty</p>
              <p className="text-sm text-text-muted font-sans">
                Discover our curated collection of fine jewelry.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase font-sans font-medium text-gold border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-parchment last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark rounded flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-parchment flex items-center justify-center">
                      <span className="text-[10px] text-text-muted font-sans text-center px-1 leading-tight">
                        {item.product.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-item-${item.key}-name`}
                      className="font-serif text-sm text-obsidian tracking-wide uppercase leading-tight"
                    >
                      {item.product.name}
                    </p>
                    <p className="text-xs text-text-muted font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-parchment rounded">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-sm font-sans text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-text-muted hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
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
          <div className="px-6 py-6 border-t border-parchment bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase font-sans text-text-secondary">
                Subtotal
              </span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-muted font-sans mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-light transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-parchment text-text-secondary font-sans text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
