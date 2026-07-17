import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[60] transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone">
            <h2 className="font-serif text-xl tracking-wide flex items-center gap-2">
              <ShoppingBag size={18} /> Your Bag ({itemCount})
            </h2>
            <button onClick={closeDrawer} className="text-velmora-taupe hover:text-velmora-ink transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-velmora-stone mb-4" />
                <p className="text-velmora-taupe text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-4 btn-outline text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-stone">
                    <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand">
                      <img src={item.images?.[0]?.src} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm tracking-wider uppercase text-velmora-ink">{item.name}</h4>
                      <p className="text-xs text-velmora-taupe mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velmora-stone">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-velmora-taupe hover:text-velmora-ink"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 py-1 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-velmora-taupe hover:text-velmora-ink"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-velmora-taupe hover:text-velmora-rose transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm font-medium text-velmora-ink mt-1.5">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-stone px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-medium text-velmora-ink">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-velmora-taupe">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-velmora-taupe hover:text-velmora-ink transition-colors py-2"
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