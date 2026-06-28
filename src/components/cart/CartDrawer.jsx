import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartSubtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full sm:w-[400px] bg-brand-sand z-[101] shadow-xl transition-transform duration-300 ease-in-out transform",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brand-sand">
            <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-brand-sand rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingBag className="w-12 h-12 text-muted" />
                <p className="font-sans text-muted">Your bag is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-brand-charcoal text-brand-sand px-8 py-3 font-sans text-sm tracking-widest uppercase hover:bg-brand-charcoal/90 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-brand-sand flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-serif tracking-widest uppercase mb-1">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted hover:text-brand-charcoal underline text-xs"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-brand-charcoal">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-brand-sand rounded-none">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-brand-sand"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-brand-sand"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-brand-sand bg-brand-sand/30">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-sans font-medium text-lg">${cartSubtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted mb-6 font-sans">
                Taxes and shipping calculated at checkout.
              </p>
              <button className="w-full bg-brand-charcoal text-brand-sand py-4 font-sans tracking-widest uppercase hover:bg-brand-charcoal/90 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;