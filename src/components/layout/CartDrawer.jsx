import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, toggleDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) toggleDrawer(false);
  };

  if (!drawerOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-fade-in"
    >
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF8F5] animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DDD3]">
          <h2 className="font-serif text-xl tracking-wider">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="text-[#7A7268] hover:text-[#3D3833] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#D4BC8B] mb-4" />
              <p className="text-[#7A7268] text-sm">Your bag is empty.</p>
              <button
                onClick={() => toggleDrawer(false)}
                className="mt-4 text-xs tracking-[0.12em] uppercase text-[#C8A96E] hover:text-[#A68B4C] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-[#E5DDD3]">
                  <div className="w-20 h-20 flex-shrink-0 bg-[#F5F0EB]">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23E5DDD3' width='1' height='1'/%3E%3C/svg%3E)`,
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm tracking-wider uppercase text-[#1A1514]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#7A7268] mt-0.5">{item.variant}</p>
                    <p className="text-sm text-[#C8A96E] mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#E5DDD3]">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#7A7268] hover:text-[#3D3833]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#7A7268] hover:text-[#3D3833]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-[#7A7268] hover:text-[#B76E79] transition-colors"
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
          <div className="border-t border-[#E5DDD3] px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm tracking-wider uppercase text-[#7A7268]">Subtotal</span>
              <span className="font-serif text-xl text-[#1A1514]">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#7A7268]">Shipping & taxes calculated at checkout</p>
            <Link
              to="/shop"
              onClick={() => toggleDrawer(false)}
              className="btn-primary w-full block text-center"
            >
              Checkout
            </Link>
            <button
              onClick={() => toggleDrawer(false)}
              className="btn-ghost w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
