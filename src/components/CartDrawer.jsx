import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { state, dispatch, totalPrice } = useCart();
  const isOpen = state.isOpen;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => dispatch({ type: 'TOGGLE_DRAWER', open: false })}
        />
      )}

      {/* Drawer */}
      <div
        aria-hidden={!isOpen}
        inert={isOpen ? undefined : 'true'}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[56] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-warm/40">
            <h2 className="font-serif text-xl tracking-widest uppercase text-velmora-espresso">
              Your Cart
            </h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_DRAWER', open: false })}
              className="p-2 text-velmora-espresso hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-brown">
                <ShoppingBag className="w-10 h-10 mb-3 opacity-40" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-sand rounded overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wider uppercase text-velmora-espresso truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-velmora-brown mt-0.5">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-velmora-warm/60 rounded">
                          <button
                            className="px-2 py-1 text-velmora-espresso hover:text-velmora-gold"
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QTY',
                                id: item.id,
                                variant: item.variant,
                                quantity: item.quantity - 1,
                              })
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium w-4 text-center text-velmora-espresso">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-velmora-espresso hover:text-velmora-gold"
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QTY',
                                id: item.id,
                                variant: item.variant,
                                quantity: item.quantity + 1,
                              })
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-velmora-brown underline hover:text-velmora-gold"
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE',
                              id: item.id,
                              variant: item.variant,
                            })
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-velmora-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="px-6 py-5 border-t border-velmora-warm/40 bg-velmora-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-brown">Subtotal</span>
                <span className="font-serif text-lg text-velmora-espresso">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-brown mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-espresso text-white py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-velmora-brown transition-colors">
                Checkout
              </button>
              <button
                className="w-full mt-2 text-xs text-velmora-brown underline hover:text-velmora-gold"
                onClick={() => dispatch({ type: 'CLEAR' })}
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
