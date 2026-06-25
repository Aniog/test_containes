import { useEffect, useRef } from "react";
import { useCart } from "../../contexts/CartContext";
import { X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cartItems]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" ref={containerRef}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col pt-6 font-sans">
        {/* Header */}
        <div className="px-6 flex items-center justify-between pb-6 border-b border-[#E5E0D8]">
          <h2 className="font-serif text-2xl tracking-widest uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[#E5E0D8] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#8B857D] text-center space-y-4">
              <p>Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.cartItemId} className="flex gap-4">
                <div className="w-24 h-24 bg-[#E5E0D8] rounded overflow-hidden flex-shrink-0 relative">
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      data-strk-img-id={`cart-thumb-${item.cartItemId}`}
                      data-strk-img={`[cart-item-${item.cartItemId}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="100"
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-${item.cartItemId}-name`} className="font-serif uppercase text-sm tracking-wide">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#8B857D] hover:text-[#2D2A26] transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    {item.options?.tone && (
                      <p className="text-xs text-[#8B857D] mt-1 capitalize">{item.options.tone}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#E5E0D8] rounded">
                      <button 
                        className="px-2 py-1 hover:bg-[#E5E0D8]/50 transition-colors"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-[#E5E0D8]/50 transition-colors"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-medium">${item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#E5E0D8] bg-white">
            <div className="flex justify-between items-center mb-6 font-serif text-xl">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <p className="text-xs text-[#8B857D] mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-[#2D2A26] text-[#FAF9F5] py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#A68D47] transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
