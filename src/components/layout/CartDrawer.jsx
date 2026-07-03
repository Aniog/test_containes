import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Trap scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal-950/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 flex flex-col transition-transform duration-300 ease-gentle ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal-700" />
            <span className="font-serif text-lg tracking-wide">Your Cart</span>
            {itemCount > 0 && (
              <span className="text-xs font-sans text-charcoal-500">({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-cream-200 flex items-center justify-center mb-6">
              <ShoppingBag size={28} strokeWidth={1} className="text-charcoal-400" />
            </div>
            <p className="font-serif text-xl text-charcoal-700 mb-2">Your cart is empty</p>
            <p className="body-text-sm text-charcoal-500 mb-8">
              Discover our demi-fine collection crafted to be treasured.
            </p>
            <button onClick={closeCart} className="btn-secondary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 group">
                    {/* Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-cream-100 rounded-sm overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <p className="product-name text-charcoal-900 text-[11px] mb-0.5">
                            {item.name}
                          </p>
                          <p className="body-text-sm text-charcoal-500">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="p-1 text-charcoal-400 hover:text-charcoal-900 transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity */}
                        <div className="flex items-center border border-charcoal-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-sm font-sans text-charcoal-900 min-w-[28px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="price text-base">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-charcoal-100 px-6 py-5 bg-cream-50">
              <div className="flex items-center justify-between mb-4">
                <span className="label text-charcoal-600">Subtotal</span>
                <span className="price text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="body-text-sm text-charcoal-500 mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full mb-3">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn-secondary w-full"
              >
                Continue Shopping
              </button>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-charcoal-100">
                <span className="body-text-sm text-charcoal-500">Free shipping</span>
                <span className="text-charcoal-300">·</span>
                <span className="body-text-sm text-charcoal-500">30-day returns</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
