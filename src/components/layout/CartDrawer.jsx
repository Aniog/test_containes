import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isOpen, setIsOpen } = useCart();
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <h2 className="font-serif text-xl tracking-widest text-obsidian">
            YOUR BAG
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-linen" />
              <p className="font-serif text-lg text-ink-muted">Your bag is empty</p>
              <p className="font-sans text-xs text-ink-muted tracking-wide">
                Discover our collection and add something beautiful.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block border border-gold text-gold font-sans text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Thumbnail placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center border border-linen">
                    <span className="font-serif text-2xl text-gold-dark font-light select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest uppercase text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-1 capitalize">
                      {item.product.shortDescription} · {item.variant} tone
                    </p>
                    <p className="font-sans text-sm text-obsidian mt-1 font-medium">
                      ${item.product.price}
                    </p>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-ink-muted hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-sans text-sm text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-ink-muted hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-ink-muted hover:text-gold transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-linen">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">
                Subtotal
              </span>
              <span className="font-serif text-xl text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-ink-muted mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-linen text-ink-muted font-sans text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
