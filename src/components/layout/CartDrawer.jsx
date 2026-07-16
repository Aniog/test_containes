import React, { useRef, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL } from '../../config.jsx';

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, cart]);

  return (
    <div className={cn("fixed inset-0 z-[100] flex justify-end transition-opacity duration-300", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      {/* Tracing hints */}
      <div className="hidden">
        {['vivid-aura-jewels', 'majestic-flora-nectar', 'golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set'].map(s => (
          <img key={`cart-hint-${s}`} data-strk-img-id={`cart-img-${s}`} data-strk-img="cartItem" />
        ))}
      </div>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity" 
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "relative w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#E5E2DD]">
          <h2 className="text-xl font-serif tracking-widest uppercase">Shopping Bag</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-[#E5E2DD] rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#A69B8F] space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-sans uppercase tracking-widest text-xs">Your bag is empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#1A150E] font-serif border-b border-[#1A150E] pb-1 uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                {/* Image Placeholder */}
                <div className="w-24 h-32 bg-[#E5E2DD] flex-shrink-0 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'%3E%3Crect width='2' height='3' fill='%23E5E2DD'/%3E%3C/svg%3E"
                      alt={item.data.name}
                      data-strk-img={`[cart-item-${item.data.slug}-name]`}
                      data-strk-img-id={`cart-img-${item.data.slug}`}
                      data-strk-img-width="200"
                      data-strk-img-ratio="2x3"
                      className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-${item.data.slug}-name`} className="font-serif text-sm tracking-widest uppercase pr-4">{item.data.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#A69B8F] hover:text-[#1A150E] transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-[#A69B8F] font-sans mt-1">{item.data.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-[#E5E2DD]">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-[#E5E2DD] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs w-8 text-center font-sans">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-[#E5E2DD] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="font-serif text-sm">${item.data.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-6 border-t border-[#E5E2DD] space-y-4 bg-white/50">
            <div className="flex justify-between items-center px-1">
              <span className="font-sans uppercase tracking-[0.2em] text-[10px] text-[#A69B8F]">Estimated Total</span>
              <span className="font-serif text-lg">${subtotal}</span>
            </div>
            <p className="text-[10px] text-[#A69B8F] text-center font-sans uppercase tracking-widest">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-[#1A150E] text-white py-4 font-sans uppercase tracking-[0.2em] text-xs hover:bg-[#C5A059] transition-all duration-500">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
