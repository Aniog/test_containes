import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-in-out-expo ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-border px-6 py-4">
            <h2 className="font-serif text-xl tracking-widest text-velmora-dark">YOUR CART</h2>
            <button onClick={closeCart} className="p-2 text-velmora-dark hover:opacity-70" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-velmora-muted">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-sans text-sm">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="mt-2 bg-velmora-dark px-6 py-2 text-sm font-medium tracking-wide text-white hover:bg-velmora-accent transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variantKey}`} className="flex gap-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-velmora-bg">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-serif text-sm tracking-wide uppercase text-velmora-dark">
                            {item.name}
                          </p>
                          <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-velmora-border">
                            <button
                              className="px-2 py-1 text-velmora-dark hover:bg-velmora-bg"
                              onClick={() => updateQuantity(item.id, item.variantKey, item.quantity - 1)}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-medium text-velmora-dark w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2 py-1 text-velmora-dark hover:bg-velmora-bg"
                              onClick={() => updateQuantity(item.id, item.variantKey, item.quantity + 1)}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-velmora-dark">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        className="self-start p-1 text-velmora-muted hover:text-velmora-dark"
                        onClick={() => removeItem(item.id, item.variantKey)}
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-velmora-border px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-velmora-muted">Subtotal</span>
                  <span className="font-serif text-lg text-velmora-dark">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-velmora-muted mb-4">Shipping & taxes calculated at checkout.</p>
                <button className="w-full bg-velmora-dark py-3 text-sm font-medium tracking-widest text-white hover:bg-velmora-accent transition-colors">
                  CHECKOUT
                </button>
                <button
                  onClick={closeCart}
                  className="mt-3 w-full border border-velmora-dark py-3 text-sm font-medium tracking-widest text-velmora-dark hover:bg-velmora-dark hover:text-white transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
