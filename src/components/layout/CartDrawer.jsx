import React from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, totalAmount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform transition-transform duration-500 ease-in-out">
          <div className="flex h-full flex-col bg-background shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b">
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <button
                type="button"
                className="relative -m-2 p-2 text-foreground/60 hover:text-foreground transition-colors"
                onClick={closeCart}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-foreground/20" />
                  <p className="text-lg font-serif">Your cart is empty.</p>
                  <button 
                    onClick={closeCart}
                    className="mt-4 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-border">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-secondary">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-foreground">
                              <h3 className="font-serif uppercase tracking-wider text-sm">
                                <Link to={`/products/${item.id}`} onClick={closeCart}>{item.name}</Link>
                              </h3>
                              <p className="ml-4">${item.price}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center border border-border">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 hover:bg-muted transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-3 py-1 text-center min-w-[2.5rem]">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 hover:bg-muted transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="font-medium text-foreground/60 hover:text-foreground text-xs uppercase tracking-widest underline underline-offset-4"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-4 py-6 sm:px-6 bg-background">
                <div className="flex justify-between text-base font-serif text-lg text-foreground mb-4">
                  <p>Subtotal</p>
                  <p>${totalAmount.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-foreground/60 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    className="flex w-full items-center justify-center bg-primary px-6 py-4 text-sm tracking-widest uppercase text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
