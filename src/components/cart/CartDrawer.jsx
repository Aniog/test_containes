import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, items, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCart(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal-900/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-2xl flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300/50">
          <h2 className="font-serif text-lg tracking-ultra-wide uppercase text-charcoal-800">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-200 rounded-full transition-colors bg-transparent"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag className="w-12 h-12 text-cream-400 mb-4" />
              <p className="font-serif text-lg text-charcoal-800 mb-2">Your cart is empty</p>
              <p className="text-sm text-charcoal-700/60 mb-6">Discover something beautiful.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center justify-center px-8 py-3 bg-charcoal-800 text-cream-50 text-xs tracking-ultra-wide uppercase font-medium hover:bg-charcoal-900 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-cream-200/60 last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded bg-warm-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-charcoal-800 tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-700/60 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-charcoal-800 mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-cream-300 text-charcoal-700 hover:bg-cream-200 transition-colors bg-transparent rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal-800 w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-cream-300 text-charcoal-700 hover:bg-cream-200 transition-colors bg-transparent rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-charcoal-700/50 hover:text-charcoal-800 underline transition-colors bg-transparent border-none p-0"
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
          <div className="border-t border-cream-300/50 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-700">Subtotal</span>
              <span className="text-sm font-medium text-charcoal-800">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal-700/50">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full py-3.5 bg-charcoal-800 text-cream-50 text-xs tracking-ultra-wide uppercase font-medium hover:bg-charcoal-900 transition-colors rounded-none">
              Proceed to Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs tracking-wider uppercase text-charcoal-700/60 hover:text-charcoal-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
