import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isDrawerOpen, setDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setDrawer(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-paper z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-lg tracking-wide">Shopping Bag ({totalItems})</h2>
            <button
              onClick={() => setDrawer(false)}
              className="p-2 text-warm-gray hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-gray-light mb-4" />
                <p className="font-serif text-lg text-ink mb-2">Your bag is empty</p>
                <p className="text-sm text-warm-gray mb-6">Discover our collection and find something you love.</p>
                <Link
                  to="/shop"
                  onClick={() => setDrawer(false)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-ink text-paper text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-charcoal transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.material}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={`https://placehold.co/160x192/f7f4ef/c9a96e?text=${encodeURIComponent(item.name)}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-sm tracking-wide text-ink truncate">{item.name}</h3>
                          <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-warm-gray mt-0.5">
                            {item.material === 'gold' ? '18K Gold' : 'Sterling Silver'}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.material)}
                          className="text-warm-gray hover:text-ink transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                            className="p-1.5 text-warm-gray hover:text-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium text-ink min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                            className="p-1.5 text-warm-gray hover:text-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-warm-gray">Subtotal</span>
                <span className="font-serif text-lg text-ink">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-warm-gray">Shipping & taxes calculated at checkout.</p>
              <button className="w-full py-4 bg-ink text-paper text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-charcoal transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setDrawer(false)}
                className="w-full py-3 border border-border text-ink text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:border-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
