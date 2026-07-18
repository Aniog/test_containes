import React, { useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" ref={containerRef}>
      <div
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform duration-300 ease-in-out bg-stone-50 flex flex-col shadow-2xl">

          <div className="flex items-center justify-between px-6 py-6 border-b border-stone-200">
            <h2 className="text-xl font-serif text-stone-900">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-stone-500 space-y-4">
                <ShoppingBag className="h-12 w-12 opacity-50" />
                <p>Your cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-6 py-2 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-colors rounded-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex py-2">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden border border-stone-200 rounded-sm bg-stone-100">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                        data-strk-img-id={`cart-thumb-${item.id}`}
                        data-strk-img={`[cart-item-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-stone-900">
                          <h3 id={`cart-item-${item.id}`} className="uppercase tracking-wider text-sm">
                            <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                              {item.name}
                            </Link>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-stone-500">{item.variant}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">

                        <div className="flex items-center border border-stone-200 rounded-sm">
                          <button
                            className="px-2 py-1 text-stone-500 hover:text-stone-900"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 py-1 text-stone-900 min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-stone-500 hover:text-stone-900"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-stone-500 hover:text-stone-900 underline underline-offset-4"
                          onClick={() => removeFromCart(item.id, item.variant)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="border-t border-stone-200 px-6 py-6 bg-white">
              <div className="flex justify-between text-lg font-medium text-stone-900 mb-4">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-stone-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <button
                  className="flex w-full items-center justify-center rounded-sm border border-transparent bg-stone-900 px-6 py-4 text-base font-medium text-stone-50 shadow-sm hover:bg-stone-800 transition-colors uppercase tracking-widest"
                  onClick={() => {
                    setIsCartOpen(false);
                    // checkout logic
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
