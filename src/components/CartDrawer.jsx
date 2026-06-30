import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-divider">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-charcoal" />
            <span className="font-serif text-lg tracking-widest uppercase font-medium">
              Your Cart
            </span>
            <span className="text-xs text-stone">({items.length})</span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 hover:text-gold transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag size={40} className="text-divider" />
              <p className="text-stone text-sm">Your cart is empty</p>
              <Link
                to="/collection"
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 bg-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.tone}`}
                className="flex gap-4 pb-5 border-b border-divider last:border-0"
              >
                <div className="w-20 h-20 bg-warm flex-shrink-0 overflow-hidden">
                  <img
                    src={`https://placehold.co/160x160/d4b87a/1c1c1c?text=${encodeURIComponent(item.name.slice(0, 12))}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="font-serif text-sm tracking-wide uppercase font-medium hover:text-gold transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-stone mt-0.5 capitalize">{item.tone} Tone</p>
                  <p className="text-sm font-medium mt-1">${item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-divider">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="p-1.5 hover:bg-warm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="p-1.5 hover:bg-warm transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.tone)}
                      className="text-xs text-stone underline hover:text-gold transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone">Subtotal</span>
              <span className="font-serif text-lg font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-charcoal text-cream text-xs tracking-widest uppercase font-medium hover:bg-gold transition-colors">
              Proceed to Checkout
            </button>
            <Link
              to="/collection"
              onClick={closeCart}
              className="block w-full py-3 text-center text-xs tracking-widest uppercase font-medium border border-charcoal hover:bg-charcoal hover:text-cream transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
