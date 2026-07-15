import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-pearl">
          <h2 className="font-serif text-xl tracking-wider">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-stone hover:text-velmora-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-stone">
            <ShoppingBag className="w-12 h-12" />
            <p className="font-sans text-sm">Your bag is empty</p>
            <button
              onClick={closeCart}
              className="btn-ghost"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-velmora-pearl/50"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand rounded-sm overflow-hidden flex items-center justify-center">
                    <span className="text-velmora-stone text-[10px] font-sans uppercase tracking-wider">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-charcoal">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-pearl rounded-full text-velmora-stone hover:text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-pearl rounded-full text-velmora-stone hover:text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-stone hover:text-velmora-rose transition-colors self-start"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-pearl px-6 py-5">
              <div className="flex justify-between mb-4">
                <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
                <span className="font-sans text-sm font-semibold text-velmora-charcoal">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-stone mb-4">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-velmora-stone hover:text-velmora-charcoal mt-4 transition-colors font-sans tracking-wider uppercase"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}