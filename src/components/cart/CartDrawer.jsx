import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-espresso/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl transform transition-transform duration-500 ease-luxury flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        inert={!isOpen ? 'true' : undefined}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">Your Cart ({itemCount})</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-line mb-4" strokeWidth={1} />
            <p className="font-serif text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-stone mb-6">Discover something beautiful today.</p>
            <button onClick={closeCart} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-white flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <Gem size={28} className="text-gold" strokeWidth={1} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="product-name text-xs leading-relaxed truncate pr-2">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-taupe hover:text-espresso transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm text-stone mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-line text-stone hover:border-espresso hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-line text-stone hover:border-espresso hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-6 bg-cream">
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe mb-6">Shipping & taxes calculated at checkout.</p>
              <button className="btn-primary w-full mb-3">Checkout</button>
              <button onClick={closeCart} className="btn-secondary w-full">
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
