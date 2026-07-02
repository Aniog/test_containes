import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal-950/40 backdrop-blur-sm"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-warm-white shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <h2 className="font-serif text-xl tracking-[0.08em] uppercase text-charcoal-900">
            Your Cart ({totalItems})
          </h2>
          <button onClick={closeDrawer} className="p-1 text-charcoal-500 hover:text-charcoal-900 transition-colors" aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-charcoal-300 mb-4" />
              <p className="font-serif text-lg text-charcoal-700 mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-charcoal-400 mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="btn-primary text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-charcoal-100 last:border-b-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-ivory-200 rounded-sm flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full shimmer" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm tracking-[0.06em] truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-400 mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal-800 mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-sans text-sm w-6 text-center text-charcoal-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-charcoal-200 flex items-center justify-center hover:border-charcoal-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-xs text-charcoal-400 underline hover:text-charcoal-800 transition-colors"
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
          <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-charcoal-500 tracking-wider uppercase">Subtotal</span>
              <span className="font-serif text-xl text-charcoal-900">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-sans text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full text-xs">
              Proceed to Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center font-sans text-xs text-charcoal-500 underline hover:text-charcoal-800 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
