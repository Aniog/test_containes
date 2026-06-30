import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 w-full max-w-md h-full bg-velmora-cream z-[101] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:opacity-70">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <p className="text-neutral-500 font-sans tracking-wide">Your cart is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-velmora-obsidian text-white px-8 py-3 tracking-widest uppercase text-xs hover:bg-neutral-800 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-32 bg-neutral-100 relative group overflow-hidden">
                   <img 
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                    <p className="text-neutral-500 text-xs mt-1">{item.category}</p>
                    <p className="text-velmora-obsidian font-sans text-sm mt-2">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-neutral-200">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-neutral-50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-sans min-w-[24px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-neutral-50 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-neutral-50/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-neutral-500 uppercase tracking-widest text-xs">Subtotal</span>
              <span className="text-lg font-sans font-medium text-velmora-obsidian">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-neutral-400 font-sans italic mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-obsidian text-white py-4 tracking-widest uppercase text-xs font-bold hover:bg-neutral-800 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
