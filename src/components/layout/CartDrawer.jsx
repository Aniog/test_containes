import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { S3_DOMAIN } from '@/config';

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 border-b border-velmora-sand/30 flex items-center justify-between">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag</h2>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-velmora-charcoal/60 uppercase tracking-widest text-sm">
                Your bag is empty
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-velmora-gold border-b border-velmora-gold pb-1 uppercase tracking-widest text-xs font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                <div className="w-24 h-32 bg-velmora-cream overflow-hidden">
                  <img
                    data-strk-img-id={`cart-img-${item.id}`}
                    data-strk-img={item.data?.stock_image_query || item.stock_image_query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.data?.name || item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="uppercase tracking-widest text-sm font-medium">
                        {item.data?.name || item.name}
                      </h3>
                      <p className="text-xs text-velmora-charcoal/60 uppercase tracking-tighter">
                        Tone: {item.tone}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.tone)}
                      className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-velmora-sand/50 rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, -1)}
                        className="p-1 hover:bg-velmora-sand/10"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, 1)}
                        className="p-1 hover:bg-velmora-sand/10"
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
          <div className="p-6 border-t border-velmora-sand/30 space-y-4 bg-velmora-cream/30">
            <div className="flex justify-between items-center uppercase tracking-widest text-sm font-semibold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-velmora-charcoal/60 text-center uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-black transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
