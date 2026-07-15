import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef(null);

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
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex justify-end"
      onClick={(e) => {
        if (e.target === overlayRef.current) setIsOpen(false);
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="serif-heading text-xl tracking-wide">Your Cart ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="serif-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-accent"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <div key={`${item.productId}-${item.variant}-${index}`} className="px-6 py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-secondary flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize mb-3">{item.variant} tone</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
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
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="serif-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-accent w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
