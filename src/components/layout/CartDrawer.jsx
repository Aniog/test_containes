import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/60 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-ivory flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <h2 className="font-serif text-lg tracking-wide text-obsidian">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-taupe ml-2">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-taupe-light" />
              <p className="font-serif text-xl text-obsidian">Your cart is empty</p>
              <p className="font-sans text-sm text-taupe">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-ivory-dark">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-ivory-dark to-taupe-light/30 flex items-center justify-center">
                      <span className="font-serif text-xs text-taupe italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="font-sans text-xs text-taupe mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-taupe-light hover:text-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-ivory-dark">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-semibold text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-ivory-dark bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-300 font-semibold">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-ivory-dark text-taupe font-sans text-xs uppercase tracking-widest py-3 hover:border-taupe transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
