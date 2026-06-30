import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

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
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 w-full max-w-[420px] h-full bg-surface animate-slide-in-right flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border-light shrink-0">
          <h2 className="font-serif text-lg font-medium text-charcoal">
            Your Cart ({totalItems})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1">
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <ShoppingBag className="w-10 h-10 text-warm-gray-light" />
              <p className="text-sm text-warm-gray">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-6 py-2.5 text-xs font-sans font-semibold uppercase tracking-wide bg-charcoal text-white hover:bg-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-4 border-b border-border-light last:border-0"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="w-20 h-20 shrink-0 bg-cream rounded overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-sm font-medium text-charcoal tracking-wide uppercase hover:text-gold transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-1 text-xs font-sans text-charcoal min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-semibold text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 self-start text-warm-gray-light hover:text-charcoal transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-border-light space-y-4 shrink-0 bg-surface">
            <div className="flex items-center justify-between">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-sans text-lg font-semibold text-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-warm-gray-light">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-charcoal text-white text-xs font-sans font-semibold uppercase tracking-wide hover:bg-gold transition-colors">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-warm-gray underline underline-offset-4 hover:text-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
