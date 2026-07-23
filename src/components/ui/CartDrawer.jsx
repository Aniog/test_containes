import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import ProductImage from './ProductImage.jsx';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart();

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

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-cream shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-warm-gray px-6 py-5">
            <h2 className="font-serif text-2xl text-ink">Your Bag</h2>
            <button
              onClick={closeCart}
              className="text-stone transition hover:text-ink"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={40} className="text-warm-gray" />
              <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
              <p className="mt-1 text-sm text-stone">Discover something beautiful.</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-gold px-8 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-gold-hover"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                  {count} {count === 1 ? 'item' : 'items'}
                </p>

                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-taupe/30">
                        <ProductImage
                          imgId={`cart-thumb-${item.id}`}
                          query={`[product-${item.id}-title]`}
                          ratio="4x5"
                          width="200"
                          alt={item.name}
                          className="h-full w-full"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-sm uppercase tracking-widest text-ink">
                            {item.name}
                          </h4>
                          <p className="mt-0.5 text-xs capitalize text-stone">
                            Tone: {item.tone}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-warm-gray">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                              className="px-2 py-1 text-stone hover:text-ink"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 text-sm text-ink">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                              className="px-2 py-1 text-stone hover:text-ink"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm text-ink">
                              ${item.price * item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id, item.tone)}
                              className="text-stone hover:text-red-600"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-warm-gray px-6 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-widest text-stone">Subtotal</span>
                  <span className="font-serif text-xl text-ink">${subtotal}</span>
                </div>
                <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
                <button className="mt-5 w-full bg-gold py-4 text-xs uppercase tracking-widest text-white transition hover:bg-gold-hover">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="mt-3 w-full border border-ink py-3 text-xs uppercase tracking-widest text-ink transition hover:bg-ink hover:text-cream"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}
