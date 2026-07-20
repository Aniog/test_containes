import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, total } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div ref={drawerRef} className="fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-background shadow-xl flex flex-col transform transition-transform duration-300">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="font-serif text-2xl tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
              <ShoppingBag className="w-12 h-12 stroke-1" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-border px-8 py-3 uppercase tracking-widest text-sm hover:border-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <img 
                  data-strk-img-id={`cart-thumb-${item.id}-${index}`}
                  data-strk-img={`[cart-item-title-${index}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <Link 
                        id={`cart-item-title-${index}`}
                        to={`/product/${item.id}`} 
                        className="font-serif text-lg hover:opacity-70 transition-opacity"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeItem(index)}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    {item.options?.tone && (
                      <p className="text-sm text-muted-foreground mt-1">Tone: {item.options.tone}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center bottom-0">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="p-2 hover:bg-muted text-muted-foreground"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-2 hover:bg-muted text-muted-foreground"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6 text-lg">
              <span className="font-medium uppercase tracking-wider text-sm">Subtotal</span>
              <span className="font-serif">${total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-accent text-accent-foreground py-4 uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}