import { useEffect, useRef } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef(null);
  const drawerContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Load images for cart items when drawer opens
  useEffect(() => {
    if (!isOpen || !drawerContentRef.current || items.length === 0) return;
    let cleanup;
    const load = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const config = (await import('@/strk-img-config.json')).default;
        if (config && Object.keys(config).length > 0) {
          cleanup = ImageHelper.loadImages(config, drawerContentRef.current);
        }
      } catch {}
    };
    requestAnimationFrame(() => load());
    return () => { if (typeof cleanup === 'function') cleanup(); };
  }, [isOpen, items.length]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      closeDrawer();
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 transition-all duration-400 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-charcoal-950/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-100">
          <h2 className="font-serif text-xl text-charcoal-950">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 text-charcoal-500 hover:text-charcoal-950 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={drawerContentRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-charcoal-900 mb-2">Your cart is empty</p>
              <p className="text-charcoal-500 text-sm mb-6">Discover our collection and find your perfect piece.</p>
              <Button variant="secondary" size="sm" onClick={closeDrawer}>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-brand-100/50 last:border-0">
                  <div className="w-20 h-20 bg-cream-100 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`product-${item.productId}-primary`}
                      data-strk-img={`[product-${item.productId}-name] jewelry gold`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-product-name text-charcoal-950 text-xs truncate">
                      {item.name}
                    </h4>
                    <p className="text-charcoal-500 text-xs mt-0.5 capitalize">{item.variant}</p>
                    <p className="text-charcoal-900 font-medium text-sm mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-950 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-charcoal-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-950 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="p-1.5 text-charcoal-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
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
          <div className="border-t border-brand-100 px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="font-medium text-charcoal-950">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-charcoal-500 text-xs">Shipping & taxes calculated at checkout</p>
            <Button variant="primary" size="lg" fullWidth>
              Checkout
            </Button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-xs text-charcoal-600 uppercase tracking-wide hover:text-gold-600 transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
