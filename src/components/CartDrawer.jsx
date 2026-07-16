import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm-border">
          <h2 className="font-serif text-xl tracking-extra-wide uppercase">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-1 text-brand-warm-gray hover:text-brand-warm-black transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-brand-warm-gray mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-warm-gray-light font-sans">
                Discover our collection of fine jewelry
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-ivory rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/40" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm font-medium text-brand-warm-black truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-warm-gray font-sans mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-sans font-medium text-brand-warm-black mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-warm-border text-brand-warm-gray hover:text-brand-warm-black hover:border-brand-warm-black transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-warm-border text-brand-warm-gray hover:text-brand-warm-black hover:border-brand-warm-black transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-warm-gray-light hover:text-brand-warm-black transition-colors font-sans tracking-wide uppercase"
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
        {items.length > 0 && (
          <div className="border-t border-brand-warm-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans tracking-wide uppercase text-brand-warm-gray">
                Subtotal
              </span>
              <span className="text-lg font-serif font-semibold text-brand-warm-black">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-brand-warm-gray-light font-sans mb-4">
              Shipping calculated at checkout
            </p>
            <button className="w-full bg-brand-gold text-white text-xs tracking-ultra-wide uppercase font-sans font-medium py-3.5 hover:bg-brand-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
