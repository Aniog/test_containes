import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, subtotal } = useCart();
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
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velvet-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velvet-50 z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-950/10">
            <h2 className="font-serif text-xl tracking-wider">
              YOUR BAG ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button onClick={() => toggleCart(false)} className="text-velvet-700 hover:text-velvet-950 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velvet-500">
                <ShoppingBag className="w-12 h-12 mb-4 text-velvet-300" />
                <p className="text-sm tracking-wider">Your bag is empty</p>
                <button
                  onClick={() => toggleCart(false)}
                  className="mt-4 text-xs tracking-wider uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-100 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-velvet-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p id={`cart-name-${item.id}`} className="text-xs tracking-widest uppercase font-medium text-velvet-950 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-velvet-600 mt-1">{item.variant}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-950/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-velvet-500 hover:text-velvet-950 underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velvet-950/10 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-wider uppercase text-velvet-700">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-500">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button
                onClick={() => toggleCart(false)}
                className="w-full text-center text-xs tracking-wider uppercase text-velvet-700 hover:text-velvet-950 transition-colors"
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