import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { cart, dispatch, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-espresso/40 z-[60] transition-opacity duration-400 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand/40">
            <h3 className="font-serif text-lg tracking-wider">SHOPPING BAG ({cart.reduce((s, i) => s + i.quantity, 0)})</h3>
            <button onClick={onClose} className="p-1 hover:opacity-70 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-mocha/60 text-sm mb-2">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="text-xs tracking-widest uppercase underline underline-offset-4 hover:text-espresso transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-sand/30">
                    {/* Product image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-warm flex items-center justify-center">
                      <div className="w-full h-full bg-sand/50" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p id={`cart-title-${item.id}`} className="font-serif text-xs tracking-wider uppercase mb-0.5">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-mocha/60 mb-1">{item.variant}</p>
                        </div>
                        <p className="font-sans text-sm font-medium">${item.price}</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-sand/60">
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { id: item.id, variant: item.variant, quantity: item.quantity - 1 },
                              })
                            }
                            className="p-1.5 hover:bg-warm transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { id: item.id, variant: item.variant, quantity: item.quantity + 1 },
                              })
                            }
                            className="p-1.5 hover:bg-warm transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id, variant: item.variant } })
                          }
                          className="text-mocha/40 hover:text-rose transition-colors p-1"
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
          {cart.length > 0 && (
            <div className="border-t border-sand/40 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-mocha/60">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-mocha/50">Shipping & taxes calculated at checkout.</p>
              <button className="btn-primary w-full">
                CHECKOUT
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs tracking-widest uppercase underline underline-offset-4 text-mocha/60 hover:text-espresso transition-colors py-2"
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
