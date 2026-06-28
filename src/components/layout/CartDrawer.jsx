import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            {/* Drawer */}
            <div className="pointer-events-auto w-screen max-w-md transform transition-transform duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                
                {/* Header */}
                <div className="flex items-start justify-between border-b border-stone-200 px-4 py-6 sm:px-6">
                  <h2 className="text-lg font-serif font-medium text-stone-950" id="slide-over-title">Shopping Cart</h2>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="relative -m-2 p-2 text-stone-400 hover:text-stone-500"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Close panel</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
                      <ShoppingBag className="h-12 w-12 text-stone-300" />
                      <p className="text-stone-500">Your cart is currently empty.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="mt-4 px-6 py-2 border border-stone-300 text-sm uppercase tracking-widest hover:bg-stone-50 transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-stone-200">
                          {cartItems.map((item) => (
                            <li key={`${item.id}-${item.variant}`} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm border border-stone-200 bg-stone-50">
                                <img
                                  src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                                  alt={item.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-stone-950">
                                    <h3 className="font-serif"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                                    <p className="ml-4">${item.price.toFixed(2)}</p>
                                  </div>
                                  {item.variant && (
                                    <p className="mt-1 text-sm text-stone-500">{item.variant}</p>
                                  )}
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center border border-stone-300 rounded-sm">
                                    <button 
                                      className="p-1 text-stone-500 hover:bg-stone-100"
                                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-3 text-stone-900">{item.quantity}</span>
                                    <button 
                                      className="p-1 text-stone-500 hover:bg-stone-100"
                                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-stone-500 hover:text-gold-600 text-xs uppercase tracking-wider"
                                      onClick={() => removeFromCart(item.id, item.variant)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="border-t border-stone-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-serif font-medium text-stone-950 mb-4">
                      <p>Subtotal</p>
                      <p>${cartTotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-stone-500 mb-6">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <button
                        className="w-full flex items-center justify-center rounded-sm border border-transparent bg-stone-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-stone-800 transition-colors uppercase tracking-widest text-sm"
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-stone-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="font-medium text-stone-950 hover:text-gold-600"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
