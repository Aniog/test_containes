import { useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, useCartDispatch } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, items } = useCart();
  const dispatch = useCartDispatch();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  useEffect(() => {
    const toggle = () => dispatch({ type: 'TOGGLE_CART' });
    window.addEventListener('toggle-cart', toggle);
    return () => window.removeEventListener('toggle-cart', toggle);
  }, [dispatch]);

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
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          onClick={() => dispatch({ type: 'CLOSE_CART' })}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <h2 className="font-serif text-lg tracking-widetitle uppercase text-velmora-deep">
            Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
            className="p-1 text-velmora-muted hover:text-velmora-deep transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ height: 'calc(100% - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-velmora-muted">
                Discover pieces you will love.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs tracking-wideprod uppercase text-velmora-deep truncate">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-velmora-deep mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, variant: item.variant, quantity: item.quantity - 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, variant: item.variant, quantity: item.quantity + 1 },
                          })
                        }
                        className="w-7 h-7 flex items-center justify-center border border-velmora-divider text-velmora-deep hover:border-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_ITEM',
                            payload: { id: item.id, variant: item.variant },
                          })
                        }
                        className="ml-auto p-1 text-velmora-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
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
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-cream border-t border-velmora-divider px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-deep">Subtotal</span>
              <span className="font-serif text-lg text-velmora-deep">${subtotal.toFixed(0)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
