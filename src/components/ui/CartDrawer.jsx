import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import Button from './Button';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-[110] transition-transform duration-500 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full bg-[#FAF9F6]">
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-platinum">
            <h2 className="text-sm uppercase tracking-widest font-sans">Your Bag ({cartItems.length})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:text-accent transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cartItems.length === 0 ? (
              <div className="h-40 flex flex-col items-center justify-center space-y-4">
                <p className="font-serif italic text-lg opacity-60">Your cart is empty</p>
                <Button variant="outline" onClick={() => setIsCartOpen(false)}>Shop All</Button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-32 bg-platinum overflow-hidden flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-name-${item.id}] luxury gold jewelry product close up`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-item-name-${item.id}`} className="sr-only">{item.name}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm font-sans uppercase tracking-wider">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-platinum hover:text-red-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-accent mt-1">{item.variant} Tone</p>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-platinum">
                        <button
                          className="px-2 py-1 hover:bg-platinum"
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs w-8 text-center">{item.quantity}</span>
                        <button
                          className="px-2 py-1 hover:bg-platinum"
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm tracking-wide font-sans">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-platinum space-y-4">
              <div className="flex justify-between items-center text-sm uppercase tracking-widest font-sans">
                <span>Total</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-platinum tracking-widest uppercase text-center">Shipping & taxes calculated at checkout</p>
              <Button className="w-full py-4 text-base">Check Out Now</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
