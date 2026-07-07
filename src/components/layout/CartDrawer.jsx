import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && drawerOpen) closeDrawer();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [drawerOpen, closeDrawer]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl animate-slide-in-right"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
            <h2 className="font-serif text-lg tracking-super flex items-center gap-2">
              <ShoppingBag size={18} />
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeDrawer} className="text-charcoal-500 hover:text-charcoal-800 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-charcoal-300 mb-4" />
                <p className="text-charcoal-500 text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-4 text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 font-medium underline underline-offset-4"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4 pb-5 border-b border-charcoal-100">
                    <div className="w-20 h-20 bg-charcoal-100 flex-shrink-0 flex items-center justify-center">
                      <img
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-prod-name-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="product-name text-xs tracking-widest" id={`cart-prod-name-${item.id}`}>{item.name}</p>
                        <button onClick={() => removeItem(item.id, item.tone)} className="text-charcoal-300 hover:text-charcoal-600 transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-charcoal-400 mt-0.5">{item.tone === 'gold' ? '18K Gold' : 'Silver Tone'}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-2 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 py-1 text-xs font-medium text-charcoal-700">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-2 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="product-price text-sm">${(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-charcoal-100 px-6 py-5">
              <div className="flex justify-between items-center mb-5">
                <span className="text-xs tracking-widest uppercase text-charcoal-500">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-900">${subtotal.toFixed(0)}</span>
              </div>
              <button className="btn-accent w-full mb-3">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="block text-center text-xs tracking-widest uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
};

export default CartDrawer;