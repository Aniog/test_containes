import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { cn } from '../lib/utils';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 shadow-2xl transition-transform duration-500 ease-in-out transform fill-mode-forwards",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-serif uppercase tracking-premium">Shopping Bag</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-muted">
                <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-20" />
                <p className="text-sm uppercase tracking-widest">Your bag is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-xs uppercase tracking-premium underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
                      cartItems.map((item) => {
                        return (
                          <div key={item.id} className="flex gap-4">
                            <div className="w-20 h-24 bg-zinc-100 overflow-hidden flex-shrink-0">
                              {item.id === 1 && (
                                <img
                                  data-strk-img-id="cart-item-1"
                                  data-strk-img="[cart-item-title-1] background jewelry"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              {item.id === 2 && (
                                <img
                                  data-strk-img-id="cart-item-2"
                                  data-strk-img="[cart-item-title-2] background jewelry"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              {item.id === 3 && (
                                <img
                                  data-strk-img-id="cart-item-3"
                                  data-strk-img="[cart-item-title-3] background jewelry"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              {item.id === 4 && (
                                <img
                                  data-strk-img-id="cart-item-4"
                                  data-strk-img="[cart-item-title-4] background jewelry"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              {item.id === 5 && (
                                <img
                                  data-strk-img-id="cart-item-5"
                                  data-strk-img="[cart-item-title-5] background jewelry"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                              {item.id > 5 && (
                                <img
                                  data-strk-img-id="cart-item-generic"
                                  data-strk-img="jewelry gold elegant"
                                  data-strk-img-ratio="2x3"
                                  data-strk-img-width="200"
                                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                              <div>
                                <div className="flex justify-between">
                                  <h3 
                                    id={
                                      item.id === 1 ? 'cart-item-title-1' :
                                      item.id === 2 ? 'cart-item-title-2' :
                                      item.id === 3 ? 'cart-item-title-3' :
                                      item.id === 4 ? 'cart-item-title-4' :
                                      'cart-item-title-5'
                                    } 
                                    className="text-sm font-serif uppercase tracking-widest"
                                  >
                                    {item.name}
                                  </h3>
                                  <p className="text-sm font-medium">${item.price}</p>
                                </div>
                                <p className="text-xs text-muted mt-1 uppercase tracking-tighter">{item.category}</p>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center border border-zinc-200">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="p-1 px-2 hover:bg-zinc-100 transition-colors"
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="text-xs px-2 w-8 text-center">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-1 px-2 hover:bg-zinc-100 transition-colors"
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-xs text-muted hover:text-foreground underline underline-offset-2 transition-colors"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t bg-stone-50/50">
              <div className="flex justify-between mb-4">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="text-lg font-serif">${cartTotal}</span>
              </div>
              <p className="text-[10px] text-muted uppercase tracking-widest mb-6 leading-relaxed">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full btn-premium py-4">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
