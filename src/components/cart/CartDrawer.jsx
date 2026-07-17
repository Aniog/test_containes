import { useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, useCartDispatch } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, subtotal } = useCart();
  const dispatch = useCartDispatch();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[440px] bg-cream z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-warm">
            <h3 className="font-serif text-xl tracking-wider">
              Shopping Bag ({items.length})
            </h3>
            <button
              onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
              className="p-2 text-taupe hover:text-espresso transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingBag size={40} strokeWidth={1} className="text-stone-warm" />
                <p className="text-taupe text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
                  className="btn-primary text-xs !py-3 !px-8"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-stone-warm">
                    <div className="w-20 h-24 bg-stone-lighter flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-taupe tracking-wider uppercase">{item.category}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-sm mb-1 truncate">{item.name}</h4>
                      <p className="text-[11px] text-taupe tracking-wider uppercase mb-1">{item.variant}</p>
                      <p className="text-sm font-medium">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-stone-warm">
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { id: item.id, variant: item.variant, quantity: item.quantity - 1 },
                              })
                            }
                            className="p-1.5 text-taupe hover:text-espresso"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { id: item.id, variant: item.variant, quantity: item.quantity + 1 },
                              })
                            }
                            className="p-1.5 text-taupe hover:text-espresso"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id, variant: item.variant } })
                          }
                          className="p-1.5 text-taupe hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={15} />
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
            <div className="border-t border-stone-warm px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg font-semibold">${subtotal}</span>
              </div>
              <p className="text-[11px] text-taupe mb-5 leading-relaxed">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full text-xs !py-3.5">
                Checkout — ${subtotal}
              </button>
              <button
                onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
                className="w-full text-center text-xs text-taupe mt-3 hover:text-espresso transition-colors tracking-wider uppercase"
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
