import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/40 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-[−8px_0_40px_rgba(26,23,20,0.15)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark">
              Your Cart
            </span>
            {items.length > 0 && (
              <span className="font-manrope text-xs text-velmora-text-muted">({items.length})</span>
            )}
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close cart"
            className="text-velmora-text-mid hover:text-velmora-obsidian transition-colors duration-200"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-text-mid italic">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted">
                Discover our curated collection of fine jewelry.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-2 font-manrope text-xs tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-velmora-sand last:border-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl text-velmora-text-muted font-light">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm font-medium tracking-widest uppercase text-velmora-text-dark leading-tight">
                      {item.name}
                    </p>
                    <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm font-semibold text-velmora-text-dark mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-manrope text-xs w-4 text-center text-velmora-text-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    aria-label="Remove item"
                    className="text-velmora-text-muted hover:text-velmora-text-dark transition-colors duration-200 self-start mt-0.5"
                  >
                    <Trash2 size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-wider uppercase text-velmora-text-muted">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-velmora-text-dark">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-medium">
              Proceed to Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="block text-center font-manrope text-xs tracking-widest uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200 mt-3"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
