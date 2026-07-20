import { useCart, useCartDispatch } from '@/lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen } = useCart();
  const dispatch = useCartDispatch();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300"
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-clay">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button
            onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            className="text-umber hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-clay mb-4" />
              <p className="text-umber text-sm">Your bag is empty</p>
              <button
                className="btn-outline mt-6 text-xs"
                onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <div key={`${item.productId}-${item.variant}-${idx}`} className="flex gap-4">
                  {/* Image */}
                  <span className="sr-only" id={`cart-name-${item.productId}-${item.variant}`}>
                    {item.name} gold jewelry
                  </span>
                  <div className="w-20 h-20 flex-shrink-0 bg-sand rounded-sm overflow-hidden">
                    <img
                      alt={item.name}
                      data-strk-img-id={`cart-${item.productId}-${item.variant}`}
                      data-strk-img={`[cart-name-${item.productId}-${item.variant}]`}
                      data-strk-img-ratio={item.imageRatio}
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs tracking-widest uppercase text-espresso truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-umber mt-0.5">{item.variant} Tone</p>
                    <p className="text-sm font-medium text-espresso mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        className="w-6 h-6 rounded-full border border-clay flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            productId: item.productId,
                            variant: item.variant,
                            quantity: item.quantity - 1,
                          })
                        }
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-sm text-espresso w-4 text-center">{item.quantity}</span>
                      <button
                        className="w-6 h-6 rounded-full border border-clay flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            productId: item.productId,
                            variant: item.variant,
                            quantity: item.quantity + 1,
                          })
                        }
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    className="text-umber hover:text-espresso transition-colors self-start mt-1"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_ITEM',
                        productId: item.productId,
                        variant: item.variant,
                      })
                    }
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-clay px-6 py-5 space-y-4">
            <div className="flex justify-between text-espresso">
              <span className="text-sm tracking-wide">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-umber">Shipping & taxes calculated at checkout</p>
            <Link
              to="/checkout"
              className="btn-primary w-full text-center"
              onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
