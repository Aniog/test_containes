import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
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
    if (isOpen && items.length > 0) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
            <h2 className="font-serif text-xl font-light text-charcoal">Your Cart</h2>
            <button onClick={closeCart} className="p-2 text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone-dark mb-4" />
                <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
                <p className="text-warm-gray text-sm">Discover our handcrafted collection</p>
                <button onClick={closeCart} className="btn-primary mt-6">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-stone/50">
                    {/* Product image */}
                    <div className="w-20 h-20 bg-warm-white rounded-sm overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <img
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.id}-title] jewelry product close-up`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="product-name text-charcoal truncate">{item.name}</p>
                      <p className="text-warm-gray text-xs capitalize mt-0.5">{item.variant}</p>
                      <p className="text-gold font-medium text-sm mt-1">{formatPrice(item.price)}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-stone rounded-sm flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-charcoal w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-stone rounded-sm flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-warm-gray text-xs underline underline-offset-2 hover:text-charcoal transition-colors"
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
            <div className="px-6 py-5 border-t border-stone">
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-sm text-warm-gray uppercase tracking-wide">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-warm-gray text-xs mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <button onClick={closeCart} className="w-full text-center text-warm-gray text-sm underline underline-offset-4 hover:text-charcoal transition-colors mt-3 py-2">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
