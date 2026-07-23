import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, itemCount, subtotal, drawerOpen, closeDrawer, removeItem, updateQuantity } = useCart();
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (drawerOpen && items.length > 0) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [drawerOpen, items]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeDrawer(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeDrawer]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeDrawer();
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] bg-white shadow-2xl transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-alt">
            <h2 className="font-serif text-lg tracking-wider flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeDrawer} className="p-2 -mr-2 hover:text-gold transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-[#6B6560]">
              <ShoppingBag className="w-12 h-12 opacity-30" />
              <p className="text-sm">Your bag is empty</p>
              <Link to="/shop" onClick={closeDrawer} className="btn-outline-gold text-xs">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4 py-3 border-b border-ivory-alt/50">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeDrawer}
                      className="w-20 h-20 bg-ivory-alt flex-shrink-0 overflow-hidden"
                    >
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.imgId}`}
                        data-strk-img={`[cart-title-${item.id}-${item.color}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-title-${item.id}-${item.color}`} className="hidden">{item.name} {item.color}</span>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeDrawer}
                        className="text-xs uppercase tracking-[0.12em] font-medium hover:text-gold transition-colors block"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-[#6B6560] mt-0.5">{item.color}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-ivory-alt">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="p-1.5 hover:text-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeItem(item.id, item.color)}
                            className="text-[#6B6560]/50 hover:text-red-400 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-5 border-t border-ivory-alt space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B6560]">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#6B6560] uppercase tracking-wider">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn-gold w-full text-center">Checkout</button>
                <button onClick={closeDrawer} className="w-full text-center text-xs uppercase tracking-[0.12em] text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
