import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from './Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-premium animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-charcoal" />
            <h2 className="font-serif text-lg uppercase tracking-extra-wide">
              Your Bag
            </h2>
            <span className="text-sm text-taupe">({itemCount})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-warm-cream transition-colors"
            aria-label="Close cart"
          >
            <X size={20} className="text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-muted-gold mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-taupe mb-6">Add some beautiful pieces to get started</p>
              <Button variant="secondary" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.uniqueId} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-warm-cream flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="product-name text-sm mb-1">{item.name}</h3>
                        <p className="text-xs text-taupe uppercase">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.uniqueId)}
                        className="p-1 hover:bg-warm-cream transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X size={14} className="text-taupe" />
                      </button>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-light-gray">
                        <button
                          onClick={() => updateQuantity(item.uniqueId, item.quantity - 1)}
                          className="p-2 hover:bg-warm-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}
                          className="p-2 hover:bg-warm-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-serif text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
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
          <div className="border-t border-light-gray px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-wide text-taupe">Subtotal</span>
              <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe text-center">
              Shipping and taxes calculated at checkout
            </p>
            <Button fullWidth size="lg">
              Checkout
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-taupe hover:text-gold transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
