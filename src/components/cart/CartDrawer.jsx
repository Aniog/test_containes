import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart, useCartActions } from '@/lib/cart';

export default function CartDrawer() {
  const cart = useCart();
  const { closeCart, removeItem, updateQuantity } = useCartActions();

  useEffect(() => {
    if (cart.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [cart.isOpen]);

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      {cart.isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 transform transition-transform duration-400 ease-out shadow-2xl ${
          cart.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/40">
            <h2 className="font-serif text-xl tracking-wide text-velmora-espresso">
              Your Bag
              {cart.items.length > 0 && (
                <span className="font-sans text-sm font-normal text-velmora-taupe ml-2">
                  ({cart.items.reduce((s, i) => s + i.quantity, 0)})
                </span>
              )}
            </h2>
            <button
              onClick={closeCart}
              className="p-1.5 text-velmora-taupe hover:text-velmora-espresso transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {cart.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-taupe">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="font-sans text-sm tracking-wide">
                Your bag is empty
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline text-xs px-8 py-3"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 py-4 border-b border-velmora-sand/30 animate-fade-in"
                  >
                    <div className="w-20 h-20 bg-velmora-sand/30 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images?.[0] || ('data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23E8E0D5" width="100" height="100"/></svg>'))}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23E8E0D5" width="100" height="100"/></svg>';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-espresso truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-taupe mt-0.5">
                        {item.variant.tone} Tone
                      </p>
                      <p className="text-sm font-medium text-velmora-espresso mt-1">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velmora-sand/60">
                          <button
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                            className="p-1.5 text-velmora-taupe hover:text-velmora-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-velmora-espresso">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                            className="p-1.5 text-velmora-taupe hover:text-velmora-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs text-velmora-taupe hover:text-red-500 transition-colors underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-5 border-t border-velmora-sand/40 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-velmora-taupe tracking-wide">
                    Subtotal
                  </span>
                  <span className="font-serif text-lg text-velmora-espresso">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-velmora-taupe/70">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn-primary w-full text-center text-xs tracking-[0.2em]">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-velmora-taupe hover:text-velmora-espresso transition-colors underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
