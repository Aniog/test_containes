import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-parchment shadow-drawer flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-xs tracking-button uppercase text-obsidian">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
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
              <p className="font-serif text-xl text-stone font-light">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block border border-gold text-gold font-sans text-xs tracking-button uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand/60">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center border border-sand/40">
                    <span className="font-serif text-2xl text-sand select-none">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-sans text-xs tracking-product uppercase text-obsidian font-medium line-clamp-2"
                    >
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-xs w-4 text-center text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-medium text-obsidian">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-whisper hover:text-stone transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-sand bg-parchment">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-button uppercase text-muted">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-muted mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-button uppercase py-4 hover:bg-gold-light transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-sand text-stone font-sans text-xs tracking-button uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
