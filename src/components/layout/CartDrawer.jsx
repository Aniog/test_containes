import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
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
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-velvet/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-night border-l border-divider z-[70] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl tracking-wide text-champagne">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-muted hover:text-champagne transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto h-[calc(100%-180px)] px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-muted mb-4" />
              <p className="text-muted text-sm">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 text-gold text-sm hover:text-gold-light transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 animate-fade-in"
                  >
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-espresso border border-divider flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted text-xs text-center px-1 font-serif">
                          {item.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-product-name text-sm text-champagne truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted mt-0.5">{item.variant}</p>
                      <p className="text-gold text-sm mt-1">${item.price}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-divider hover:border-gold/50 flex items-center justify-center text-muted hover:text-champagne transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-champagne w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-divider hover:border-gold/50 flex items-center justify-center text-muted hover:text-champagne transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-muted hover:text-red-400 transition-colors self-start mt-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-divider px-6 py-5 bg-night">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="text-lg font-serif text-champagne">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold hover:bg-gold-light text-velvet font-sans text-sm font-medium tracking-wider uppercase py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
