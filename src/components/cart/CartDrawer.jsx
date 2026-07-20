import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  // Lock body scroll when open
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
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-ink/40 cart-overlay transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-ink" />
            <h2 className="font-cormorant text-xl tracking-widest-sm text-velmora-ink">
              Your Cart
            </h2>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-velmora-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-stone hover:text-velmora-ink transition-colors duration-300"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-divider" />
              <p className="font-cormorant text-2xl text-velmora-ink">Your cart is empty</p>
              <p className="font-inter text-sm text-velmora-stone">Discover our collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest-sm text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-ink transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(({ key, product, variant, quantity }) => (
                <li key={key} className="flex gap-4 py-4 border-b border-velmora-divider last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-parchment flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl text-velmora-stone/40 select-none">V</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-ink leading-tight">
                          {product.name}
                        </p>
                        <p className="font-inter text-xs text-velmora-stone mt-0.5">{variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(key)}
                        aria-label="Remove item"
                        className="text-velmora-stone hover:text-velmora-ink transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-divider">
                        <button
                          onClick={() => updateQuantity(key, quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-inter text-sm text-velmora-ink">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="font-cormorant text-lg text-velmora-ink">
                        ${(product.price * quantity).toFixed(2)}
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
          <div className="px-6 py-6 border-t border-velmora-divider bg-velmora-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="font-inter text-xs uppercase tracking-widest-sm text-velmora-stone">Subtotal</span>
              <span className="font-cormorant text-2xl text-velmora-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-stone mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-ink font-inter text-xs uppercase tracking-widest-md py-4 hover:bg-velmora-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-velmora-divider text-velmora-stone font-inter text-xs uppercase tracking-widest-sm py-3 hover:border-velmora-ink hover:text-velmora-ink transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
