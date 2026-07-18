import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, drawerOpen, setDrawerOpen, removeFromCart, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (drawerOpen && drawerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [drawerOpen, cart]);

  return (
    <>
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setDrawerOpen(false)} />
          <div ref={drawerRef} className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h3 className="font-serif text-xl tracking-widest uppercase">Your Bag ({cart.length})</h3>
              <button onClick={() => setDrawerOpen(false)} className="text-espresso hover:text-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-taupe gap-4">
                <ShoppingBag className="w-12 h-12" />
                <p className="text-sm">Your bag is empty.</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {cart.map(item => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-4 border-b border-hairline">
                      <div className="w-20 h-20 bg-cream flex-shrink-0">
                        <img
                          alt={item.name}
                          data-strk-img-id={`cart-${item.imgId}`}
                          data-strk-img={`[cart-name-${item.id}] gold jewelry`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p id={`cart-name-${item.id}`} className="font-serif text-xs uppercase tracking-widest text-espresso truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-hairline">
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-xs text-taupe hover:text-red-500 transition-colors underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="font-medium text-sm text-espresso">${item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-hairline px-6 py-5 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-taupe">Subtotal</span>
                    <span className="font-medium text-espresso">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
                  <button className="btn-primary w-full text-center">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>
    </>
  );
}
