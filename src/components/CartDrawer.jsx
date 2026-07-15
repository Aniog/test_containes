import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-velmora-charcoal/5 flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-widest-extra font-medium">Your Bag ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-velmora-charcoal/40">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-xs uppercase tracking-widest-extra text-center">Your bag is empty</p>
              <Button onClick={() => setIsCartOpen(false)} variant="outline">Continue Shopping</Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4">
                <div className="w-24 h-24 bg-velmora-sand flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img="jewelry gold product"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    alt={item.name}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex justify-between">
                     <h3 className="text-xs uppercase tracking-widest-extra font-medium">{item.name}</h3>
                     <p className="text-xs">${item.price}</p>
                  </div>
                  <p className="text-[10px] text-velmora-charcoal/60 uppercase tracking-widest">Gold Vermeil</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center border border-velmora-charcoal/10">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-velmora-sand"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-velmora-sand"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] uppercase tracking-widest underline underline-offset-4 text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-charcoal/5 space-y-4">
            <div className="flex justify-between text-sm uppercase tracking-widest-extra font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-velmora-charcoal/40 uppercase tracking-widest leading-relaxed">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full" size="lg">Checkout</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
