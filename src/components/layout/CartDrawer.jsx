import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import useCartStore from '@/store/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, incrementQuantity, decrementQuantity, getTotalPrice } = useCartStore();

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
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-base/60 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-drawer animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <h2 className="font-serif text-xl font-medium text-deep-base">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-warm-gray hover:text-deep-base transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-warm-border mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-deep-base mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-gray">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-warm-border last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream-dark rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-gold-accent/10 to-gold-accent/5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif uppercase tracking-product text-xs text-deep-base mb-1 truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-warm-gray capitalize mb-3">
                      {item.variant}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-warm-border rounded-none">
                        <button
                          onClick={() => decrementQuantity(item.id, item.variant)}
                          className="p-1.5 text-warm-gray hover:text-deep-base transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm text-deep-base font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id, item.variant)}
                          className="p-1.5 text-warm-gray hover:text-deep-base transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-deep-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="p-1 text-warm-gray hover:text-deep-base transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-warm-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-warm-gray uppercase tracking-wide">Subtotal</span>
              <span className="font-sans text-lg font-medium text-deep-base">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-warm-gray text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-warm-gray hover:text-deep-base transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
