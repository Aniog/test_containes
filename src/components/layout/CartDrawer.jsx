import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

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
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg-deep/70 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-bg-deep border-l border-border-subtle flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
          <h2 className="font-serif text-lg tracking-[0.15em] text-text-primary">
            YOUR BAG
          </h2>
          <button
            onClick={closeCart}
            className="p-1.5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-text-secondary mb-4 opacity-40" />
              <p className="text-text-secondary text-sm mb-2">Your bag is empty</p>
              <p className="text-text-secondary text-xs mb-6">Time to add something beautiful</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-gold text-bg-deep px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-border-subtle last:border-0"
                >
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-bg-warm rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.images?.[0]?.url || ''}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-sm tracking-[0.15em] text-text-primary hover:text-gold transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-text-secondary mt-0.5">{item.variant}</p>
                    <p className="text-sm text-gold font-medium mt-1">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-text-primary w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-text-secondary hover:text-gold transition-colors uppercase tracking-wider"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-subtle px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium">
                Subtotal
              </span>
              <span className="text-lg font-serif text-text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-text-secondary">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-bg-deep py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
