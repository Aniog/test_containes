import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { cn } from '@/lib/utils';
import { products } from '../data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div
          ref={containerRef}
          className="w-screen max-w-md bg-brand-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        >
          <div className="px-6 py-4 border-b border-brand-stone/10 flex items-center justify-between">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-brand-stone/5 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-brand-stone font-sans">
                <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                <p className="font-serif text-lg">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-brand-charcoal underline underline-offset-4 uppercase text-xs tracking-widest hover:text-brand-gold transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {products.map((product) => {
                  const item = cart.find(i => i.id === product.id);
                  if (!item) return null;
                  
                  return (
                    <div key={product.id} className="flex gap-4 font-sans">
                      <div className="w-24 h-32 bg-brand-stone/5 flex-shrink-0 relative">
                        <img
                          data-strk-img-id={`cart-img-${product.id}`}
                          data-strk-img={`[${product.id}-name-cart] luxury jewelry gold`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          className="w-full h-full object-cover"
                          alt={product.name}
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 id={`${product.id}-name-cart`} className="font-serif uppercase tracking-widest text-sm">{product.name}</h3>
                          <p className="text-sm font-medium">${product.price}</p>
                        </div>
                        <p className="text-xs text-brand-stone mt-1 uppercase tracking-wider">{product.category}</p>

                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-brand-stone/20">
                            <button
                              className="p-1 px-2 hover:bg-brand-stone/5 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs">{item.quantity}</span>
                            <button
                              className="p-1 px-2 hover:bg-brand-stone/5 transition-colors"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            className="text-[10px] uppercase tracking-widest text-brand-stone hover:text-brand-charcoal transition-colors"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="px-6 py-8 border-t border-brand-stone/10 bg-brand-cream/50 font-sans">
              <div className="flex justify-between items-end mb-6">
                <span className="text-xs uppercase tracking-widest text-brand-stone">Subtotal</span>
                <span className="text-xl font-medium font-serif">${cartTotal}</span>
              </div>
              <p className="text-[10px] text-brand-stone mb-6 italic text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-brand-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-brand-gold transition-colors duration-500">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
