import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { formatPrice } from '@/lib/utils';
import { S3_DOMAIN } from '@/config';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-6 flex items-center justify-between border-b">
          <h2 className="text-xl font-serif tracking-widest uppercase font-medium">YOUR BAG</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:opacity-60">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center gap-4">
              <ShoppingBag size={48} strokeWidth={0.5} className="text-[#6B6B6B]" />
              <p className="text-[#6B6B6B] font-medium tracking-wide">Your bag is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-[#1A1A1A] text-white px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const data = item.data || {};
              const imageUrl = data.images?.[0] || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
              
              return (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-[#F5EFE6] overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={data.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-serif uppercase tracking-widest font-medium pr-4">{data.name}</h3>
                        <span className="text-sm font-medium">{formatPrice(data.price)}</span>
                      </div>
                      <p className="text-xs text-[#6B6B6B] mt-1">{data.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-[#E5E5E5]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#F5EFE6]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#F5EFE6]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] tracking-widest uppercase text-[#6B6B6B] underline underline-offset-4 hover:text-[#1A1A1A]"
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

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-widest uppercase font-medium">Subtotal</span>
              <span className="text-lg font-medium">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-[#6B6B6B] text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-[#1A1A1A] text-white py-4 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
