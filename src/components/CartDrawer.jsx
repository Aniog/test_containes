import React, { useEffect, useRef } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../lib/CartContext";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]); // Also re-scan when cart changes

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-brand-linen z-[101] transition-transform duration-500 ease-in-out shadow-2xl flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 stroke-[1px]" />
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-brand-ebony text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-brand-gold transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-6">
                  <div className="w-24 h-32 bg-gray-50 flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-name-${item.id}] [cart-item-category-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm tracking-widest uppercase leading-snug">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-brand-ebony transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p id={`cart-item-category-${item.id}`} className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                        {item.variant} • {item.subCategory}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="px-2 py-1 hover:bg-gray-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="px-2 py-1 hover:bg-gray-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm tracking-widest underline decoration-brand-gold/30 underline-offset-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-8 py-8 bg-white border-t border-gray-100">
            <div className="flex justify-between mb-8">
              <span className="uppercase tracking-[0.2em] text-xs font-medium">Subtotal</span>
              <span className="font-serif text-lg tracking-widest">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8 text-center italic">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-brand-ebony text-white py-4 uppercase tracking-[0.3em] text-xs font-medium hover:bg-brand-gold transition-colors duration-500">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
