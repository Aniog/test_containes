import { useEffect } from 'react';
import { X, ShoppingBag, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-softblack/40 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slideIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-deepbrown/10">
          <h2 className="font-serif text-xl tracking-widest text-deepbrown">Your Bag ({items.length})</h2>
          <button onClick={closeCart} className="p-2 text-deepbrown hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-taupe">
            <ShoppingBag className="w-12 h-12 opacity-30" />
            <p className="text-sm font-sans">Your bag is empty</p>
            <button onClick={closeCart} className="text-xs tracking-widest uppercase underline hover:text-gold transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              {items.map((item, idx) => (
                <div key={`${item.id}-${item.variant}-${idx}`} className="flex gap-4 py-3 border-b border-deepbrown/5">
                  <div className="w-20 h-20 flex-shrink-0 bg-sand/50 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-sand flex items-center justify-center text-stone text-[10px] font-sans">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p id={`cart-item-name-${item.id}`} className="font-serif text-sm tracking-widest uppercase text-deepbrown">{item.name}</p>
                        <p className="text-[11px] text-taupe font-sans mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-taupe hover:text-deepbrown transition-colors p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-deepbrown/15">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-sans font-medium text-deepbrown">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-deepbrown/10 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase font-sans text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-deepbrown">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-taupe text-center font-sans">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button onClick={closeCart} className="w-full text-xs tracking-widest uppercase font-sans text-taupe hover:text-deepbrown transition-colors py-2">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
