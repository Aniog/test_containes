import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

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
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-velmora-text-secondary">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand" />
              <p className="font-serif text-xl text-velmora-text-secondary">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-text-muted">Discover our collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-sand to-velmora-linen flex items-center justify-center">
                      <span className="font-serif text-2xl text-velmora-gold opacity-60">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-velmora-text-primary leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm font-600 text-velmora-text-primary mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-4 text-center text-velmora-text-primary">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-xs text-velmora-text-muted hover:text-velmora-obsidian transition-colors underline underline-offset-2"
                      >
                        Remove
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
          <div className="px-6 py-6 border-t border-velmora-sand bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-text-muted">Subtotal</span>
              <span className="font-sans text-lg font-600 text-velmora-text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-text-muted mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 font-600">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-velmora-sand text-velmora-text-secondary font-sans text-xs tracking-widest uppercase py-3 hover:border-velmora-stone transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
