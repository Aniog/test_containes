import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-cream z-50 shadow-drawer flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-velmora-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-muted font-medium">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-stone hover:text-velmora-ink transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-subtle" />
              <p className="font-serif text-xl font-light text-velmora-muted">Your cart is empty</p>
              <p className="text-xs text-velmora-subtle tracking-wide">Discover our collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs font-medium tracking-[0.15em] uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-white transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-sand to-velmora-linen flex items-center justify-center">
                      <span className="text-velmora-gold text-xs font-serif italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium tracking-[0.08em] uppercase text-velmora-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-ink mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium text-velmora-ink w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-velmora-subtle hover:text-velmora-ink transition-colors self-start mt-0.5"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-sand bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-subtle mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-white py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs font-medium tracking-[0.12em] uppercase text-velmora-muted hover:text-velmora-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
