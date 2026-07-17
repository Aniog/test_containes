import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, itemCount, removeItem, updateQuantity } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = requestAnimationFrame(() => {
        // ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-espresso" />
            <h2 className="font-serif text-lg tracking-wide text-espresso">
              Your Bag ({itemCount})
            </h2>
          </div>
          <button onClick={closeCart} className="p-2 text-espresso hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-taupe-light mb-4" />
            <p className="text-espresso font-serif text-lg mb-2">Your bag is empty</p>
            <p className="text-taupe text-sm mb-6">Discover our collection of demi-fine jewelry.</p>
            <Link to="/shop" onClick={closeCart} className="btn-primary">
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-3 border-b border-sand/20 last:border-0"
                >
                  <div className="w-20 h-20 flex-shrink-0 bg-sand/30 rounded-sm overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-sand/50 to-sand/20" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-espresso tracking-wide uppercase truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-sand/50 rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1.5 text-espresso hover:text-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm text-espresso min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1.5 text-espresso hover:text-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-espresso">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-taupe hover:text-red-500 transition-colors mt-0.5"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-sand/30 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe-light">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-taupe hover:text-espresso transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
