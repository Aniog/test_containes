import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal,
  } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => {
        document.body.style.overflow = '';
        window.cancelAnimationFrame(frameId);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen, items]);

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-deep-950/30 backdrop-blur-sm transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-deep-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-deep-100">
            <h3 className="font-serif text-lg tracking-wider">
              YOUR BAG ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
            <button onClick={closeDrawer} className="p-1 text-deep-600 hover:text-deep-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-deep-400">
              <ShoppingBag className="w-12 h-12" />
              <p className="text-sm tracking-wide">Your bag is empty</p>
              <button onClick={closeDrawer} className="btn-outline text-xs px-6 py-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-cream-200 rounded-sm overflow-hidden">
                      <img
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`[cart-img-ref-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <span className="product-name text-xs block text-deep-900" id={`cart-img-ref-${item.id}`}>
                            {item.name}
                          </span>
                          <span className="text-xs text-deep-500 mt-0.5 block">
                            {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-deep-400 hover:text-deep-700 transition-colors p-1"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-deep-200 rounded-sm">
                          <button
                            className="p-1.5 hover:text-gold-600 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:text-gold-600 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-deep-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-deep-200 px-6 py-5 space-y-4">
                <div className="flex justify-between text-deep-800">
                  <span className="text-sm tracking-wide">Subtotal</span>
                  <span className="text-sm font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-deep-500">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full py-3 text-sm tracking-wider">
                  CHECKOUT
                </button>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="block text-center text-xs text-deep-500 hover:text-gold-600 transition-colors tracking-wide"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
