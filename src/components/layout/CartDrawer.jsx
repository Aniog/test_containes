import React, { useEffect, useRef } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif uppercase tracking-widest font-medium">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
              <ShoppingBag className="w-12 h-12 text-gray-200" />
              <p className="text-gray-500 font-light">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-accent border-b border-accent pb-1"
              >
                Shop New Arrivals
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-24 h-32 bg-muted overflow-hidden">
                  <img
                     data-strk-img-id={"cart-item-" + item.id}
                     data-strk-img={"[" + "cart-item-name-" + item.id + "] luxury gold jewelry product"}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="200"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={item.name}
                     className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={"cart-item-name-" + item.id} className="text-sm font-serif uppercase tracking-wider pr-4">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-gray-200 rounded-px px-2">
                       <button
                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
                         className="p-1 text-gray-400 hover:text-foreground"
                       >
                         <Minus className="w-3 h-3" />
                       </button>
                       <span className="text-xs w-8 text-center">{item.quantity}</span>
                       <button
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="p-1 text-gray-400 hover:text-foreground"
                       >
                         <Plus className="w-3 h-3" />
                       </button>
                    </div>
                    <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-widest text-gray-500">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-6">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-[#1A1A1A] text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#2A2A2A] transition-all flex items-center justify-center space-x-2">
              <span>Checkout</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
