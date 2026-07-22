import React from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300 ease-out transform",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-serif uppercase tracking-widest">Shopping Bag</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-brand-sand transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag size={48} className="text-gray-300" />
                <p className="text-gray-500 font-serif italic text-lg">Your bag is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-8 py-3 bg-brand-charcoal text-white text-xs uppercase tracking-widestest"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-brand-sand flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-xs uppercase tracking-widest font-medium">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-brand-charcoal transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-brand-sand"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-brand-sand"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t bg-brand-sand/30 space-y-4">
              <div className="flex justify-between items-center font-serif text-lg">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 text-center italic">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full py-4 bg-brand-charcoal text-white text-xs uppercase tracking-widestest hover:bg-opacity-90 transition-all">
                Continue to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
