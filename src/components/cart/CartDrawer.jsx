import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { state, dispatch, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          state.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-out ${
          state.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-taupe">
            <h2 className="font-serif text-xl tracking-[0.1em] uppercase">
              Cart ({totalItems})
            </h2>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="p-1 hover:text-brand-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-brand-warm-gray">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
                <p className="font-serif text-lg">Your cart is empty</p>
                <p className="text-sm mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b border-brand-taupe/50">
                    <div className="w-20 h-20 bg-brand-gold-light flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.15em] uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-brand-gold font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: item.quantity - 1 },
                            })
                          }
                          className="p-1 border border-brand-taupe hover:border-brand-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                          }
                          className="p-1 border border-brand-taupe hover:border-brand-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                          className="ml-auto text-xs text-brand-warm-gray hover:text-red-500 transition-colors uppercase tracking-widest"
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
          {state.items.length > 0 && (
            <div className="border-t border-brand-taupe px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.1em]">Subtotal</span>
                <span className="font-serif text-xl font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-brand-warm-gray">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-brand-gold text-white py-3 uppercase tracking-[0.15em] text-sm hover:bg-brand-gold-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="w-full text-center text-sm text-brand-charcoal hover:text-brand-gold transition-colors uppercase tracking-[0.1em]"
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