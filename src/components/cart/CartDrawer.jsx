import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeDrawer, totalPrice, totalItems, updateQuantity, removeItem } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60">
      <div className="absolute inset-0 bg-black/30" onClick={closeDrawer} />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-velmora-ivory shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-espresso" />
            <span className="font-sans text-sm font-medium tracking-wider uppercase text-velmora-espresso">
              Cart ({totalItems})
            </span>
          </div>
          <button onClick={closeDrawer} className="text-velmora-stone hover:text-velmora-espresso transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="font-sans text-sm text-velmora-stone">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-4 text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark font-medium transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 hairline">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream rounded-sm flex-shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-velmora-gold/30 to-velmora-gold/10" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-serif text-sm tracking-wider text-velmora-espresso">
                          {item.name}
                        </p>
                        <p className="text-xs text-velmora-taupe mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-sand hover:text-velmora-rose transition-colors ml-2"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-black/10 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-espresso transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs font-sans text-velmora-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-espresso transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm text-velmora-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-black/5 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
              <span className="font-sans text-base font-medium text-velmora-espresso">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-taupe font-sans">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-xs tracking-wider uppercase text-velmora-stone hover:text-velmora-espresso font-medium transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
