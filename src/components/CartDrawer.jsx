import React from 'react';
import { useCartStore } from '@/store/useCartStore';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const FALLBACK_IMG = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

const getThumbnailUrl = (imgId) => {
  if (!imgId || !strkImgConfig[imgId]) return FALLBACK_IMG;
  const entry = strkImgConfig[imgId];
  return entry.results?.[0]?.url || FALLBACK_IMG;
}

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getCartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-serif tracking-wide uppercase">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 opacity-70 hover:opacity-100" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-70">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-lg">Your cart is elegantly empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={getThumbnailUrl(item.mainImgId)}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 id={`cart-item-${item.id}`} className="font-serif uppercase tracking-widest text-sm pr-4">
                          {item.name}
                        </h3>
                        <p className="font-medium">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Tone: {item.tone}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-muted text-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm min-w-[2.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-muted text-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.tone)}
                        className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors link-underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 bg-card">
            <div className="flex justify-between mb-4">
              <span className="uppercase tracking-wider text-sm font-medium">Subtotal</span>
              <span className="font-medium">${getCartTotal().toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="w-full bg-primary text-primary-foreground hover:opacity-90 py-4 uppercase tracking-widest text-sm font-medium transition-opacity focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;