import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { cn } from '../../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, setIsCartOpen } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, cart]);

  const handleClose = () => {
    onClose();
    setIsCartOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleClose}
      />

      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold">Shopping Bag</h2>
          <button onClick={handleClose} className="hover:text-primary transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-8">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
              <ShoppingBag size={48} className="text-gray-100" strokeWidth={1} />
              <p className="font-serif text-lg text-gray-400 italic font-light">Your bag is awaiting its first treasure.</p>
              <button 
                onClick={handleClose}
                className="px-8 py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-6 animate-in fade-in slide-in-from-right-4">
                <div className="w-24 h-32 bg-gray-50 flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-thumb-${item.id}`}
                    data-strk-img={`[cart-item-name-${item.id}] jewelry gold accessory`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 id={`cart-item-name-${item.id}`} className="text-xs uppercase tracking-widest font-bold font-serif">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Gold Tone</p>
                  <p className="text-sm font-medium mt-auto font-serif">${item.price}</p>
                  <div className="flex items-center border border-gray-100 w-fit mt-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-2 hover:bg-gray-50"><Minus size={10} /></button>
                    <span className="px-4 py-2 text-xs font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-2 hover:bg-gray-50"><Plus size={10} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] font-bold">
              <span>Subtotal</span>
              <span className="text-lg font-serif tracking-normal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-primary text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
