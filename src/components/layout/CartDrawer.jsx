import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-espresso/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-lg tracking-widest uppercase">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-1 text-espresso hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
                <p className="text-taupe text-sm">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-border-light">
                    <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-item-name-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p id={`cart-item-name-${item.id}`} className="font-serif text-sm tracking-[0.15em] uppercase text-espresso truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      <p className="text-sm text-espresso mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border text-espresso hover:border-espresso transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-border text-espresso hover:border-espresso transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-taupe hover:text-espresso transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs tracking-widest uppercase text-espresso hover:text-gold transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}