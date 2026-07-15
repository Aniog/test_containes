import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, subtotal, removeItem, updateQuantity, toggleDrawer } = useCart();

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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleDrawer(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-velmora-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-taupe/30">
            <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
            <button
              onClick={() => toggleDrawer(false)}
              className="p-2 hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-warmgray">
                <ShoppingBag size={48} className="mb-4 opacity-50" />
                <p className="font-serif text-lg">Your cart is empty</p>
                <p className="text-sm mt-1">Discover something beautiful.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-sand rounded-md flex-shrink-0 overflow-hidden">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={`[cart-name-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-name-${item.id}`} className="sr-only">{item.name}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-serif text-sm tracking-wide uppercase">{item.name}</p>
                          <p className="text-xs text-velmora-warmgray mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-warmgray hover:text-velmora-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-taupe/50 rounded">
                          <button
                            className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-sm font-medium">{item.quantity}</span>
                          <button
                            className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-velmora-taupe/30 bg-velmora-cream">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-velmora-warmgray">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-charcoal text-white py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300">
                Checkout
              </button>
              <p className="text-center text-xs text-velmora-warmgray mt-3">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
