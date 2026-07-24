import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const raf = requestAnimationFrame(() => {
        if (drawerRef.current) {
          ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        }
      });
      return () => cancelAnimationFrame(raf);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={drawerRef}>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-cream z-[70] animate-slide-in-right shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-borderline">
          <h2 className="font-serif text-lg tracking-wide flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            Your Bag ({itemCount})
          </h2>
          <button onClick={closeCart} className="p-1 hover:text-gold transition-colors" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={40} className="text-taupe/30 mb-4" />
              <p className="text-taupe text-sm">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-accent-sm mt-4"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-borderline">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-warmgray flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag size={24} className="text-taupe/30" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-espresso" id={`cart-name-${item.id}`}>
                          {item.name}
                        </p>
                        <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-taupe/50 hover:text-espresso transition-colors ml-2"
                        aria-label="Remove"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-borderline">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium text-espresso">
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
          <div className="border-t border-borderline px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="font-serif text-lg text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe/60">Shipping & taxes calculated at checkout</p>
            <button className="btn-accent w-full">
              Checkout &mdash; ${subtotal.toFixed(2)}
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-taupe hover:text-espresso transition-colors py-2 tracking-wider uppercase"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}